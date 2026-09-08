# Nhận đơn hàng về Google Sheet — 5 phút cài đặt

Form đặt hàng trên landing đã sẵn sàng gửi đơn. Chỉ cần nối nó với Google Sheet của bạn:

## Bước 1 — Tạo Sheet
1. Vào [sheets.new](https://sheets.new), đặt tên **Đơn hàng Sầu Khánh Sơn**.
2. Dòng 1 điền đúng 10 tiêu đề này (đúng thứ tự):

```
thoi_gian | san_pham | loai_sau | size_tui | so_luong | ho_ten | dien_thoai | dia_chi | khung_gio | ghi_chu
```

## Bước 2 — Dán đoạn mã
Trong Sheet: **Tiện ích mở rộng → Apps Script**, xoá hết nội dung cũ, dán đoạn này rồi bấm **Lưu**:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = e.parameter;
  sheet.appendRow([
    p.thoi_gian, p.san_pham, p.loai_sau, p.size_tui, p.so_luong,
    p.ho_ten, p.dien_thoai, p.dia_chi, p.khung_gio, p.ghi_chu
  ]);
  return ContentService.createTextOutput('ok');
}
```

## Bước 3 — Deploy
1. Bấm **Triển khai (Deploy) → Tùy chọn triển khai mới**.
2. Loại: **Ứng dụng web (Web app)**.
3. *Thực thi với tư cách*: **Tôi**.
4. *Ai có quyền truy cập*: **Bất kỳ ai** ← quan trọng, không chọn đúng thì đơn không vào được.
5. Bấm **Triển khai**, cấp quyền, rồi **copy URL** dạng
   `https://script.google.com/macros/s/AKfy…/exec`

## Bước 4 — Dán URL vào trang

**Nếu web đã deploy (Netlify / Vercel / GitHub Pages):**
Mở `index.html` bằng Notepad hoặc VS Code, tìm dòng gần đầu file:

```javascript
window.SKS_SHEET_URL="";
```

Dán URL vào giữa 2 dấu ngoặc kép:

```javascript
window.SKS_SHEET_URL="https://script.google.com/macros/s/AKfy…/exec";
```

Lưu file rồi upload lại lên hosting (Netlify: kéo lại thư mục `web` vào app.netlify.com/drop). Xong!

**Nếu đang xem trong Omelette:** bảng **Tweaks** → mục **Nhận đơn** → dán URL vào ô
**Google Apps Script Web App URL**.

Từ giờ mỗi đơn khách gửi sẽ tự thêm 1 dòng vào Sheet. Cài app Google Sheets trên điện thoại
là có thông báo đơn mới ngay.

---

## Thông tin cần cập nhật

Footer đang để **Zalo: 09xxxxx** — bạn cho tớ số Zalo thật để sửa lại (link hiện tại
`https://zalo.me/09xxxxx` chưa dùng được). Email `parkraekuyng@gmail.com` đã gắn xong.

## Khi chưa gắn URL
Form vẫn chạy bình thường: hiện màn "Đã nhận đơn của bạn!" và ghi nội dung đơn vào
console của trình duyệt — tiện để test trước khi cài Sheet.
