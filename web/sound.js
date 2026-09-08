/* Sầu Khánh Sơn — generative score engine.
   100% synthesised at runtime (Web Audio), so every melody is original by construction:
   no samples, no licensed loops. Pentatonic (điệu Bắc) motifs, bamboo-flute and
   đàn-tranh-inspired timbres, forest ambience. Never autoplays — start() must be
   called from a real user gesture. */
(function () {
  const KEY = "sks-audio-muted";
  let ctx, master, busReverb, noiseBuf;
  let started = false, muted = false, scene = "wait";
  let tickTimer = null, step = 0, nextTime = 0, melodyIdx = 0, phrase = null;
  let trackEl = null, trackGain = null, trackLp = null;

  /* pentatonic degrees, in semitones from the root */
  const PENTA = [0, 2, 4, 7, 9];
  const ROOT = 48; /* C3 in midi-ish terms */
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  const deg = (i, oct) => ROOT + 12 * (oct || 0) + PENTA[((i % 5) + 5) % 5] + 12 * Math.floor(i / 5);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = a => a[(Math.random() * a.length) | 0];

  const SCENES = {
    /* bpm, pad chord degrees, layer densities 0..1, register offset */
    wait:   { bpm: 58, oct: 0, prog: [[0,2,4],[-1,2,4],[0,2,5],[-3,1,4]], padGain: 0.16, amb: 0.34, flute: 0.34, pluck: 0.12, gliss: 0.10, marimba: 0.00, perc: 0.00, wood: 0.00, drone: 0.10, birds: 0.55, bright: 850 },
    crack:  { bpm: 74, oct: 1, prog: [[0,3,4],[2,4,6]], padGain: 0.13, amb: 0.18, flute: 0.32, pluck: 0.75, gliss: 0.45, marimba: 0.22, perc: 0.38, wood: 0.25, drone: 0.14, birds: 0.0, bright: 1900 },
    meet:   { bpm: 86, oct: 1, prog: [[0,2,4],[3,5,7],[2,4,6],[0,2,4]], padGain: 0.11, amb: 0.14, flute: 0.26, pluck: 0.42, gliss: 0.18, marimba: 0.62, perc: 0.32, wood: 0.40, drone: 0.10, birds: 0.1, bright: 2300 },
    reveal: { bpm: 72, oct: 1, prog: [[0,2,4,6],[-1,2,4,6],[1,3,5,7],[0,2,4,7]], padGain: 0.21, amb: 0.20, flute: 0.60, pluck: 0.48, gliss: 0.35, marimba: 0.26, perc: 0.42, wood: 0.18, drone: 0.18, birds: 0.2, bright: 2700 },
    page:   { bpm: 60, oct: 0, prog: [[0,2,4],[2,4,6],[-1,2,4],[0,2,5]], padGain: 0.10, amb: 0.28, flute: 0.16, pluck: 0.18, gliss: 0.06, marimba: 0.13, perc: 0.00, wood: 0.06, drone: 0.09, birds: 0.4, bright: 1050 }
  };

  /* original 5-note phrase bank, all in ngũ cung — the flute picks and varies these */
  const PHRASES = [
    [0, 2, 4, 2, null],
    [4, 3, 2, null, 0],
    [2, 4, 5, 4, 2],
    [0, 1, 2, 4, null],
    [4, 6, 4, 2, 1],
    [2, 1, 0, null, null]
  ];

  function makeNoise() {
    const len = ctx.sampleRate * 2;
    const b = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = b.getChannelData(0);
    let l0 = 0, l1 = 0, l2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      l0 = 0.99765 * l0 + w * 0.0990460;
      l1 = 0.96300 * l1 + w * 0.2965164;
      l2 = 0.57000 * l2 + w * 1.0526913;
      d[i] = (l0 + l1 + l2 + w * 0.1848) * 0.22;
    }
    return b;
  }

  /* ---- instruments ------------------------------------------------------ */

  /* sáo tre: breathy triangle + noise, soft attack, gentle vibrato */
  function flute(t, f, dur, g) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator();
    const gn = ctx.createGain(), lp = ctx.createBiquadFilter();
    const vib = ctx.createOscillator(), vibG = ctx.createGain();
    o.type = "triangle"; o2.type = "sine";
    o.frequency.setValueAtTime(f * 0.995, t);
    o.frequency.linearRampToValueAtTime(f, t + 0.09);
    o2.frequency.setValueAtTime(f * 2.002, t);
    lp.type = "lowpass"; lp.frequency.value = f * 5 + 700; lp.Q.value = 0.6;
    vib.frequency.value = rnd(4.2, 5.4); vibG.gain.value = f * 0.006;
    vib.connect(vibG).connect(o.frequency);
    const o2g = ctx.createGain(); o2g.gain.value = 0.16;
    /* breath */
    const br = ctx.createBufferSource(), brG = ctx.createGain(), brF = ctx.createBiquadFilter();
    br.buffer = noiseBuf; br.loop = true;
    brF.type = "bandpass"; brF.frequency.value = f * 2.4; brF.Q.value = 1.1;
    brG.gain.value = 0.055;
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.exponentialRampToValueAtTime(g, t + 0.14);
    gn.gain.setValueAtTime(g, t + dur * 0.55);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(lp); o2.connect(o2g).connect(lp); br.connect(brF).connect(brG).connect(lp);
    lp.connect(gn); gn.connect(master); gn.connect(busReverb);
    [o, o2, vib, br].forEach(n => { n.start(t); n.stop(t + dur + 0.05); });
  }

  /* đàn tranh: plucked steel string with the signature upward bend */
  function pluck(t, f, g) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator();
    const gn = ctx.createGain(), bp = ctx.createBiquadFilter();
    o.type = "sawtooth"; o2.type = "triangle";
    o.frequency.setValueAtTime(f * 0.94, t);
    o.frequency.exponentialRampToValueAtTime(f, t + 0.07);
    o2.frequency.setValueAtTime(f * 2.01, t);
    bp.type = "lowpass"; bp.frequency.setValueAtTime(f * 8 + 1200, t);
    bp.frequency.exponentialRampToValueAtTime(f * 2 + 300, t + 0.9);
    bp.Q.value = 1.4;
    const o2g = ctx.createGain(); o2g.gain.value = 0.3;
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.exponentialRampToValueAtTime(g, t + 0.006);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + rnd(1.0, 1.6));
    o.connect(bp); o2.connect(o2g).connect(bp);
    bp.connect(gn); gn.connect(master); gn.connect(busReverb);
    [o, o2].forEach(n => { n.start(t); n.stop(t + 1.8); });
  }

  /* soft wooden marimba-ish note */
  function marimba(t, f, g) {
    const o = ctx.createOscillator(), h = ctx.createOscillator();
    const gn = ctx.createGain(), hg = ctx.createGain();
    o.type = "sine"; h.type = "sine";
    o.frequency.value = f; h.frequency.value = f * 3.98;
    hg.gain.setValueAtTime(g * 0.22, t);
    hg.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.exponentialRampToValueAtTime(g, t + 0.008);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    o.connect(gn); h.connect(hg).connect(master);
    gn.connect(master); gn.connect(busReverb);
    [o, h].forEach(n => { n.start(t); n.stop(t + 0.9); });
  }

  /* trống con / frame drum — muted thump, never a kick drum */
  function drum(t, g) {
    const o = ctx.createOscillator(), gn = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(132, t);
    o.frequency.exponentialRampToValueAtTime(64, t + 0.22);
    gn.gain.setValueAtTime(g, t);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    const n = ctx.createBufferSource(), ng = ctx.createGain(), nf = ctx.createBiquadFilter();
    n.buffer = noiseBuf; nf.type = "lowpass"; nf.frequency.value = 420;
    ng.gain.setValueAtTime(g * 0.5, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
    o.connect(gn).connect(master);
    n.connect(nf).connect(ng).connect(master);
    o.start(t); o.stop(t + 0.35); n.start(t); n.stop(t + 0.2);
  }

  /* mõ / wood click — dry, quiet, keeps the pulse honest */
  function wood(t, g) {
    const o = ctx.createOscillator(), gn = ctx.createGain(), bp = ctx.createBiquadFilter();
    o.type = "square";
    o.frequency.setValueAtTime(rnd(1150, 1400), t);
    bp.type = "bandpass"; bp.frequency.value = 1600; bp.Q.value = 6;
    gn.gain.setValueAtTime(g, t);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    o.connect(bp).connect(gn).connect(master);
    o.start(t); o.stop(t + 0.08);
  }

  /* đàn tranh glissando — the ascending run that says "Vietnamese folk" instantly */
  function glissando(t, oct, up) {
    const n = 5 + ((Math.random() * 3) | 0);
    for (let i = 0; i < n; i++) {
      const d = up ? i : n - 1 - i;
      pluck(t + i * rnd(0.055, 0.075), hz(deg(d + 2, oct)), rnd(0.035, 0.07));
    }
  }

  /* one bird call, for the orchard ambience */
  function bird(t) {
    const o = ctx.createOscillator(), gn = ctx.createGain();
    const f0 = rnd(1900, 3100);
    o.type = "sine";
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f0 * rnd(1.2, 1.7), t + 0.05);
    o.frequency.exponentialRampToValueAtTime(f0 * 0.9, t + 0.12);
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.exponentialRampToValueAtTime(0.022, t + 0.02);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(gn).connect(busReverb);
    o.start(t); o.stop(t + 0.2);
  }

  /* ---- sustained beds --------------------------------------------------- */
  let pad = null, amb = null, drone = null;

  function buildDrone() {
    const out = ctx.createGain(); out.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 220; lp.Q.value = 0.4;
    const o = ctx.createOscillator(), o2 = ctx.createOscillator();
    o.type = "sine"; o2.type = "triangle";
    const o2g = ctx.createGain(); o2g.gain.value = 0.35;
    o.connect(lp); o2.connect(o2g).connect(lp);
    lp.connect(out).connect(master);
    o.start(); o2.start();
    return { out, o, o2 };
  }

  function buildPad() {
    const out = ctx.createGain(); out.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 900; lp.Q.value = 0.5;
    const lfo = ctx.createOscillator(), lfoG = ctx.createGain();
    lfo.frequency.value = 0.06; lfoG.gain.value = 260;
    lfo.connect(lfoG).connect(lp.frequency); lfo.start();
    lp.connect(out); out.connect(master); out.connect(busReverb);
    const voices = [0, 1, 2, 3].map(() => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "triangle"; g.gain.value = 0.25;
      o.connect(g).connect(lp); o.start();
      return { o, g };
    });
    return { out, lp, voices };
  }

  function buildAmbience() {
    const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1250; bp.Q.value = 0.65;
    const g = ctx.createGain(); g.gain.value = 0;
    const lfo = ctx.createOscillator(), lfoG = ctx.createGain();
    lfo.frequency.value = 0.09; lfoG.gain.value = 0.008;
    lfo.connect(lfoG).connect(g.gain); lfo.start();
    src.connect(bp).connect(g).connect(master); g.connect(busReverb);
    src.start();
    return { g, bp };
  }

  function applyScene(fade) {
    const s = SCENES[scene], t = ctx.currentTime, ft = fade == null ? 1.6 : fade;
    /* a real track owns the music — the synth beds step aside entirely */
    if (trackEl) {
      pad.out.gain.setTargetAtTime(0, t, 0.6);
      amb.g.gain.setTargetAtTime(0, t, 0.6);
      drone.out.gain.setTargetAtTime(0, t, 0.6);
      return;
    }
    pad.out.gain.cancelScheduledValues(t);
    pad.out.gain.setTargetAtTime(s.padGain, t, ft / 3);
    pad.lp.frequency.setTargetAtTime(s.bright, t, ft / 3);
    voiceChord(s.prog[0], s.oct, ft);
    amb.g.gain.setTargetAtTime(s.amb * 0.09, t, ft / 2);
    drone.out.gain.setTargetAtTime(s.drone * 0.5, t, ft / 2);
    drone.o.frequency.setTargetAtTime(hz(deg(0, s.oct) - 12), t, ft / 2);
    drone.o2.frequency.setTargetAtTime(hz(deg(0, s.oct) - 12) * 1.005, t, ft / 2);
  }

  /* retune the pad to a chord — this is what makes the harmony move */
  function voiceChord(chord, oct, ft) {
    const t = ctx.currentTime;
    chord.forEach((d, i) => {
      const v = pad.voices[i];
      if (!v) return;
      v.o.frequency.setTargetAtTime(hz(deg(d, oct)), t, ft / 2);
      v.g.gain.setTargetAtTime(0.25, t, ft / 3);
    });
    for (let i = chord.length; i < pad.voices.length; i++)
      pad.voices[i].g.gain.setTargetAtTime(0, t, ft / 3);
  }

  /* ---- scheduler -------------------------------------------------------- */
  function tick() {
    if (!started || trackEl) return;
    const s = SCENES[scene], spb = 60 / s.bpm, sixteenth = spb / 2;
    while (nextTime < ctx.currentTime + 0.7) {
      const t = Math.max(nextTime, ctx.currentTime + 0.02);
      const beat = step % 8;
      const bar = (step / 8) | 0;

      /* harmony walks the progression, one chord per two bars */
      if (beat === 0 && bar % 2 === 0)
        voiceChord(s.prog[((bar / 2) | 0) % s.prog.length], s.oct, 2.2);

      if (s.perc > 0 && (beat === 0 || (beat === 5 && Math.random() < s.perc)))
        drum(t, 0.09 * s.perc + 0.03);

      if (s.wood > 0 && beat % 2 === 1 && Math.random() < s.wood)
        wood(t, 0.05 * s.wood + 0.015);

      if (Math.random() < s.pluck * (beat % 2 === 0 ? 1 : 0.45)) {
        const d = pick([0, 1, 2, 3, 4, 5, 6]);
        pluck(t, hz(deg(d, s.oct + 1)), rnd(0.05, 0.1));
      }

      if (beat === 6 && Math.random() < s.gliss)
        glissando(t, s.oct + 1, Math.random() < 0.7);

      if (Math.random() < s.marimba * 0.5)
        marimba(t + rnd(0, sixteenth), hz(deg(pick([0, 2, 4, 5, 7]), s.oct + 1)), rnd(0.05, 0.09));

      /* sáo tre plays a phrase from the bank, one note per beat, rests included */
      if (beat === 0 && Math.random() < s.flute) phrase = PHRASES[(melodyIdx++) % PHRASES.length];
      if (phrase && beat % 2 === 0) {
        const n = phrase[beat / 2];
        if (n != null) {
          const vary = Math.random() < 0.22 ? 1 : 0;
          flute(t, hz(deg(n + vary, s.oct + 1)), spb * rnd(1.1, 2.1), rnd(0.055, 0.1));
        }
        if (beat === 6) phrase = null;
      }

      if (Math.random() < s.birds * 0.06) bird(t + rnd(0, spb));

      nextTime += sixteenth;
      step++;
    }
  }

  /* Optional: drop your own bed in the project, then set
     window.SKS_BED_TRACK = "assets/nhac-nen.mp3" before this script runs — it plays
     underneath, ducked per scene. Unset — the synth score carries the page alone. */
  function loadTrack() {
    const el = new Audio();
    el.loop = true; el.preload = "auto"; el.crossOrigin = "anonymous"; el.volume = 0;
    el.src = window.SKS_BED_TRACK;
    el.addEventListener("canplay", () => {
      try {
        const src = ctx.createMediaElementSource(el);
        trackGain = ctx.createGain(); trackGain.gain.value = 0;
        trackLp = ctx.createBiquadFilter(); trackLp.type = "lowpass"; trackLp.frequency.value = 1400; trackLp.Q.value = 0.4;
        src.connect(trackLp).connect(trackGain).connect(master);
        trackEl = el; el.volume = 1;
        el.play().catch(() => {});
        applyScene(0.8);
        duckTrack();
      } catch (e) { /* ignore */ }
    }, { once: true });
    el.addEventListener("error", () => {}, { once: true });
    el.load();
  }

  /* each interaction re-shapes the same track: quiet and veiled while waiting,
     open and full at the reveal, settled back for reading the page */
  function duckTrack() {
    if (!trackGain) return;
    const S = {
      wait:   { g: 0.34, lp: 1100 },
      crack:  { g: 0.62, lp: 4200 },
      meet:   { g: 0.72, lp: 7000 },
      reveal: { g: 0.95, lp: 16000 },
      page:   { g: 0.5,  lp: 2600 }
    }[scene] || { g: 0.5, lp: 3000 };
    const t = ctx.currentTime;
    trackGain.gain.setTargetAtTime(S.g, t, 0.7);
    if (trackLp) trackLp.frequency.setTargetAtTime(S.lp, t, 0.7);
  }

  /* ---- public api ------------------------------------------------------- */
  const API = {
    get available() { return true; },
    get muted() { return muted; },
    get started() { return started; },

    /* MUST be called from a user gesture — nothing sounds before that */
    start() {
      if (started) return;
      muted = localStorage.getItem(KEY) === "1";
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      noiseBuf = makeNoise();
      master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      /* cheap plate: two feedback delays, keeps everything in one warm room */
      busReverb = ctx.createGain(); busReverb.gain.value = 0.5;
      [0.037, 0.061].forEach(dt => {
        const d = ctx.createDelay(1), fb = ctx.createGain(), lp = ctx.createBiquadFilter();
        d.delayTime.value = dt; fb.gain.value = 0.55;
        lp.type = "lowpass"; lp.frequency.value = 2600;
        busReverb.connect(d); d.connect(lp); lp.connect(fb); fb.connect(d);
        lp.connect(master);
      });
      pad = buildPad();
      amb = buildAmbience();
      drone = buildDrone();
      if (window.SKS_BED_TRACK) loadTrack();
      started = true;
      nextTime = ctx.currentTime + 0.1;
      applyScene(2.4);
      master.gain.setTargetAtTime(muted ? 0 : 0.9, ctx.currentTime, 1.2);
      tickTimer = setInterval(tick, 90);
      tick();
    },

    setScene(name, opts) {
      if (!SCENES[name]) return;
      scene = name;
      step = 0;
      phrase = null;
      if (!started) return;
      nextTime = ctx.currentTime + 0.05;
      applyScene(opts && opts.fade);
      duckTrack();
      /* a single soft accent marks the moment of change */
      if (name === "crack") {
        const t = ctx.currentTime + 0.02;
        drum(t, 0.16);
        if (!trackEl) glissando(t + 0.05, 2, true);
      }
      if (name === "reveal") {
        const t = ctx.currentTime + 0.02;
        drum(t, 0.13);
        if (!trackEl) { glissando(t + 0.04, 1, true); flute(t + 0.35, hz(deg(4, 1)), 3.4, 0.11); }
      }
    },

    toggle() {
      if (!started) { this.start(); return !muted; }
      muted = !muted;
      localStorage.setItem(KEY, muted ? "1" : "0");
      master.gain.setTargetAtTime(muted ? 0 : 0.9, ctx.currentTime, 0.25);
      if (trackEl) { if (muted) trackEl.pause(); else trackEl.play().catch(() => {}); }
      return !muted;
    },

    stop() {
      clearInterval(tickTimer);
      if (trackEl) { try { trackEl.pause(); } catch (e) {} }
      if (started) master.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
      started = false;
    }
  };

  window.SKSAudio = API;
})();
