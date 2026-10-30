# Prompt Log

## Cuộc trò chuyện

### Người dùng
Tôi đang làm dự án E1, hãy đọc projects_rule và task_decomposition

### Trợ lý
Mình đã đọc `project_rules.md` và `TASK_DECOMPOSITION.md`.

Mình nắm các yêu cầu chính: dùng React 19/Vite; làm từng task và xác minh xong mới chuyển task; `DeveloperCard` dùng HTML ngữ nghĩa và không có thẻ `div`; dùng CSS Modules, CSS Custom Properties, key ổn định; ảnh đại diện phải HTTPS, có kích thước rõ ràng và hiện chữ cái đầu khi tải lỗi; giao diện phải hoạt động ở rộng 375px.

Lộ trình gồm 13 task, từ khởi tạo dự án đến kiểm tra và ghi nhận kết quả. Mình cũng lưu ý tên file trong quy tắc hiện là `project_rules.md`, còn Task 02 nhắc `project-rules.md`.

### Người dùng
tạo thêm 1 file prompt_log, ghi lại cuộc trò chuyện của tôi vs bạn

### Trợ lý
Mình sẽ tạo `prompt_log.md` trong thư mục dự án, ghi lại các lượt trao đổi đến hiện tại theo thứ tự.

### Người dùng
làm task4 tạo các components card.jsx trong src, define fullname và role, có artical, header, hgroup, h2,p, và trình bày developercard trong app.jsx,...

### Trợ lý
Đã triển khai Task 04 bằng component `src/components/DeveloperCard.jsx`, dùng `fullName` và `role` với giá trị mặc định, cấu trúc HTML ngữ nghĩa và `useId` để liên kết `aria-labelledby`. `App.jsx` hiển thị component với dữ liệu mẫu.

### Người dùng
Xử lý avatar bị thiếu hoặc tải lỗi bằng chữ viết tắt lấy từ fullName, hoặc bạn lấy 1 ảnh bất kì bạn thích để thử. Khi avatarUrl thay đổi, phải thử tải URL mới. Hướng dẫn tôi kiểm tra URL đúng, URL lỗi và URL trống. Ghi prompt_log. Chưa thêm metrics.

### Trợ lý
Đã thêm fallback chữ viết tắt lấy từ `fullName` khi `avatarUrl` trống hoặc ảnh tải lỗi. Fallback có mô tả truy cập được; khi URL thay đổi, component hiển thị và tải ảnh mới. Chưa thêm metrics. Kiểm tra bằng `https://github.com/Vietomato.png` cho URL hợp lệ, `https://httpstat.us/404` cho URL lỗi, và `avatarUrl=""` cho URL trống.

### Người dùng
Chỉ làm Task 07: thêm prop metrics, duyệt bằng Object.entries, hiển thị bằng dl/dt/dd và Fragment có key. Không dùng div và không dùng index làm key. Ghi prompt_log. Chưa làm skills.

### Trợ lý
Đã thêm prop `metrics` với mặc định `{}`, duyệt bằng `Object.entries` và render từng cặp `dt`/`dd` trong `Fragment` có key theo tên metric. Đã thêm dữ liệu metrics mẫu vào `App.jsx` để kiểm tra. Không thêm skills.
