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

### Người dùng
Task 08: tạo SkillBadge nhận name và tier với giá trị mặc định. Chuẩn bị CSS Module riêng, chưa thiết kế chi tiết. Kiểm tra component hiển thị được. Ghi prompt_log. Chưa tích hợp toàn bộ danh sách skills.

### Trợ lý
Đã tạo `SkillBadge.jsx` nhận `name` và `tier` có giá trị mặc định, kèm CSS Module riêng ở mức cơ bản. Component được kiểm tra độc lập; chưa tích hợp danh sách skills vào `DeveloperCard`.

### Người dùng
Thêm skills vào DeveloperCard, render ul/li và SkillBadge với key là skill.id. Truyền dữ liệu Đinh Hoàng Việt từ App. Xử lý danh sách skills rỗng. Ghi prompt_log. Chưa thiết kế CSS.

### Trợ lý
Đã thêm prop `skills` mặc định là mảng rỗng; danh sách được render bằng `ul`/`li`, mỗi mục dùng `SkillBadge` và `skill.id` làm key. Khi danh sách rỗng, card hiển thị thông báo phù hợp. `App.jsx` truyền profile Đinh Hoàng Việt cùng dữ liệu skills mẫu. Không chỉnh thiết kế CSS.

### Người dùng
Chỉ làm Task 10: thiết kế DeveloperCard bằng CSS Modules và CSS Custom Properties. Style card, header, avatar, initials và metrics. Avatar và fallback cùng kích thước. Không inline style. Ghi prompt_log. Chưa làm phần responsive riêng.

### Trợ lý
Đã tạo `DeveloperCard.module.css` với CSS Custom Properties và style cho card, header, avatar/fallback và metrics. Ảnh và chữ viết tắt dùng chung class 64×64; không thêm inline style hoặc media query responsive.

### Người dùng
Chỉ làm Task 11: thiết kế SkillBadge bằng CSS Module riêng, bố trí danh sách có gap và xuống dòng. Tên kỹ năng dài không được tràn. Ghi prompt_log. Chưa làm Task 12.

### Trợ lý
Đã thiết kế badge bằng CSS Module riêng với màu chữ dễ đọc, nền, viền và khoảng đệm. Danh sách skills dùng flex-wrap và gap; badge cho phép tên dài ngắt dòng. Không thêm media query hoặc thực hiện Task 12.

### Người dùng
Chỉ làm Task 12: điều chỉnh responsive ở 375px và desktop. Kiểm tra tên dài, vai trò dài, metrics và skills. Sửa nguyên nhân tràn, không dùng overflow-x: hidden để che lỗi. Nêu rõ những kiểm tra nào AI đã thực hiện và những kiểm tra nào tôi cần làm. Ghi prompt_log.

### Trợ lý
Đã thêm padding co giãn cho trang và quy tắc màn hình hẹp cho card/header/metrics. Nhãn metric dài được phép ngắt dòng ở desktop; không dùng `overflow-x: hidden`. AI đã kiểm tra trình duyệt ở viewport đặt 375px và 1440px với tên, vai trò, nhãn/giá trị metrics và skill dài không có dấu cách; cả hai kích thước đều không có phần tử tràn ngang và `document.scrollWidth` không vượt viewport. Build và lint cũng đạt. Người dùng nên kiểm tra lại trên thiết bị/trình duyệt thực tế và thử nội dung thật ở 375px cùng desktop.
