# Đưa landing Sầu Khánh Sơn lên web

Thư mục này là một website tĩnh hoàn chỉnh. KHÔNG cần cài gì, không cần Node.

## Cách 1 — Netlify Drop (nhanh nhất, miễn phí, 30 giây)
1. Vào https://app.netlify.com/drop
2. Kéo cả thư mục "web" này vào trang đó (kéo thư mục, không phải file lẻ)
3. Xong — Netlify trả về link dạng https://ten-ngau-nao-do.netlify.app

## Cách 2 — Vercel
1. Vào https://vercel.com/new
2. Chọn "Deploy" → kéo thư mục "web" vào

## Cách 3 — GitHub Pages
1. Tạo repo mới trên GitHub, upload TOÀN BỘ nội dung bên trong thư mục "web"
   (index.html phải nằm ở gốc repo, không nằm trong thư mục con)
2. Settings → Pages → Source: branch main, folder / (root) → Save

## Vì sao mở trực tiếp bằng cách nháy đúp index.html lại lỗi?
Trình duyệt chặn trang tự nạp file khi mở bằng đường dẫn file:// — đó là lý do
báo lỗi. Trang cần được phục vụ qua http. Cứ deploy theo 1 trong 3 cách trên là chạy.

Muốn chạy thử trên máy: mở Terminal/CMD tại thư mục này rồi gõ
    python -m http.server 8000
rồi vào http://localhost:8000

## Danh sách file
index.html            trang landing
support.js            runtime của trang
ds-base.js, _ds/      design system Sầu Khánh Sơn
sound.js              điều khiển nhạc theo từng tương tác
assets/nhac-nen.mp3   nhạc nền
mascot-embed.html     mascot 3D (mascot.js + three-d-stage.js)
assets/               ảnh sầu riêng, vườn, mascot

## Việc còn phải sửa trước khi chạy thật
- Footer đang để "Zalo: 09xxxxx" — thay bằng số thật trong index.html
- Đơn hàng: làm theo HƯỚNG DẪN nhận đơn hàng.md để đơn về Google Sheet
