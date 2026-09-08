import * as THREE from 'three';

const stage = document.querySelector('three-d-stage');
const { THREE: T } = await stage.ready;

const M = {
  flesh: new T.MeshStandardMaterial({ name: 'sau-flesh', color: 0xF39C12, roughness: 0.24, metalness: 0.05 }),
  fleshLight: new T.MeshStandardMaterial({ name: 'sau-flesh-light', color: 0xFFB93E, roughness: 0.3, metalness: 0.04 }),
  shell: new T.MeshStandardMaterial({ name: 'vo-gai-green', color: 0x27AE60, roughness: 0.78, metalness: 0.02 }),
  gloss: new T.MeshStandardMaterial({ name: 'kinh-mat-black', color: 0x111111, roughness: 0.08, metalness: 0.35 }),
  frost: new T.MeshStandardMaterial({ name: 'tuyet-cap-dong', color: 0xF0F8FF, roughness: 0.12, metalness: 0.05, transparent: true, opacity: 0.72 }),
  blush: new T.MeshStandardMaterial({ name: 'ma-hong', color: 0xE8825E, roughness: 0.5, metalness: 0.0, transparent: true, opacity: 0.55 })
};

const mesh = (name, geo, mat) => { const m = new T.Mesh(geo, mat); m.name = name; m.castShadow = true; m.receiveShadow = true; return m; };

const root = new T.Group();
root.name = 'SauCoolGenZ';
const char = new T.Group();
char.name = 'character';
root.add(char);

/* ---- body: durian segment (lathe profile), flattened front-to-back ---- */
const prof = [];
for (let i = 0; i <= 40; i++) {
  const t = i / 40;
  const y = -0.46 + 0.94 * t;
  const r = 0.44 * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.92)), 0.72);
  prof.push(new T.Vector2(Math.max(r, 0.004), y));
}
const body = mesh('than-mui-sau', new T.LatheGeometry(prof, 64), M.flesh);
body.scale.set(1.06, 1, 0.66);
char.add(body);

/* ---- green spiky shell cap on top ---- */
const cap = new T.Group();
cap.name = 'vo-gai-cap';
const dome = mesh('cap-dome', new T.SphereGeometry(0.3, 44, 26, 0, Math.PI * 2, 0, Math.PI * 0.56), M.shell);
dome.scale.set(1, 0.62, 0.78);
cap.add(dome);
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2 + 0.2;
  const ring = i % 2 === 0 ? 0.2 : 0.12;
  const sp = mesh('gai-' + (i + 1), new T.ConeGeometry(0.05, 0.15, 20), M.shell);
  sp.position.set(Math.cos(a) * ring, 0.11 + (i % 2 === 0 ? 0.0 : 0.06), Math.sin(a) * ring * 0.78);
  sp.rotation.set(Math.sin(a) * 0.78, 0, -Math.cos(a) * 0.78);
  cap.add(sp);
}
const tip = mesh('gai-dinh', new T.ConeGeometry(0.06, 0.17, 22), M.shell);
tip.position.y = 0.22;
cap.add(tip);
cap.position.y = 0.33;
char.add(cap);

/* ---- sunglasses, tilted ---- */
const glasses = new T.Group();
glasses.name = 'kinh-mat';
for (const s of [-1, 1]) {
  const lens = mesh(s < 0 ? 'lens-trai' : 'lens-phai', new T.SphereGeometry(0.115, 32, 20), M.gloss);
  lens.scale.set(1, 0.72, 0.34);
  lens.position.set(s * 0.135, 0, 0.3);
  glasses.add(lens);
  const glint = mesh(s < 0 ? 'glint-trai' : 'glint-phai', new T.SphereGeometry(0.03, 18, 12), M.frost);
  glint.scale.set(1.5, 0.7, 0.2);
  glint.position.set(s * 0.17, 0.035, 0.34);
  glint.rotation.z = -0.5;
  glasses.add(glint);
  const arm = mesh(s < 0 ? 'gong-trai' : 'gong-phai', new T.CylinderGeometry(0.014, 0.014, 0.19, 12), M.gloss);
  arm.rotation.set(Math.PI / 2, 0, Math.PI / 2);
  arm.position.set(s * 0.255, 0, 0.22);
  arm.rotation.y = s * 0.5;
  glasses.add(arm);
}
const bridge = mesh('song-kinh', new T.BoxGeometry(0.075, 0.026, 0.05), M.gloss);
bridge.position.set(0, 0.015, 0.31);
glasses.add(bridge);
glasses.position.set(0, 0.155, 0);
glasses.rotation.z = 0.11;
char.add(glasses);

/* ---- smirk + blush ---- */
const smile = mesh('mieng-nhech', new T.TorusGeometry(0.085, 0.019, 14, 32, Math.PI * 0.85), M.gloss);
smile.rotation.set(0, 0, Math.PI * 1.08);
smile.position.set(0.015, -0.055, 0.295);
char.add(smile);
for (const s of [-1, 1]) {
  const b = mesh(s < 0 ? 'ma-trai' : 'ma-phai', new T.SphereGeometry(0.06, 20, 14), M.blush);
  b.scale.set(1, 0.62, 0.16);
  b.position.set(s * 0.245, -0.02, 0.235);
  char.add(b);
}

/* ---- arms: right raised with a thumbs-up ---- */
function arm(name, side, lift) {
  const g = new T.Group();
  g.name = name;
  const dir = lift ? 1 : -1;
  const upper = mesh(name + '-tay', new T.CapsuleGeometry(0.052, 0.2, 14, 24), M.fleshLight);
  upper.position.y = dir * 0.12;
  g.add(upper);
  const fist = mesh(name + '-ban-tay', new T.SphereGeometry(0.078, 26, 18), M.fleshLight);
  fist.position.y = dir * 0.25;
  g.add(fist);
  if (lift) {
    const thumb = mesh(name + '-ngon-like', new T.CapsuleGeometry(0.03, 0.07, 12, 18), M.fleshLight);
    thumb.position.set(0.015, 0.34, 0.015);
    g.add(thumb);
  }
  g.position.set(side * 0.45, -0.08, 0.06);
  g.rotation.z = lift ? -side * 0.3 : side * 0.34;
  return g;
}
char.add(arm('tay-phai', 1, true));
char.add(arm('tay-trai', -1, false));

/* ---- little dangling feet ---- */
for (const s of [-1, 1]) {
  const foot = mesh(s < 0 ? 'chan-trai' : 'chan-phai', new T.CapsuleGeometry(0.058, 0.055, 14, 22), M.fleshLight);
  foot.position.set(s * 0.135, -0.47, 0.05);
  foot.rotation.set(0.3, 0, s * 0.3);
  char.add(foot);
}

char.position.y = 0.95;

/* ---- floating frost crystals + vapour puffs ---- */
const ice = new T.Group();
ice.name = 'tinh-the-da-tuyet';
const spots = [
  [0.58, 1.4, 0.28, 0.07], [-0.6, 1.18, 0.14, 0.055], [0.46, 0.62, 0.32, 0.048],
  [-0.46, 0.52, -0.18, 0.062], [0.14, 1.66, -0.2, 0.05], [-0.26, 1.7, 0.22, 0.04],
  [0.62, 0.95, -0.28, 0.042], [-0.62, 0.88, 0.28, 0.036], [0.28, 0.3, 0.4, 0.05],
  [-0.18, 0.26, -0.32, 0.038]
];
spots.forEach((p, i) => {
  const c = mesh('da-tuyet-' + (i + 1), new T.OctahedronGeometry(p[3], 0), M.frost);
  c.position.set(p[0], p[1], p[2]);
  c.rotation.set(i * 0.7, i * 1.1, i * 0.4);
  ice.add(c);
});
root.add(ice);

stage.setObject(root);
