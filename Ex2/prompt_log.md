# Prompt log

## 2026-11-01

### User prompt
> Bạn hãy đọc project_rules.md và TASK_DECOMPOSITION của folder ex2, và viết ra những gì bạn hiểu để tôi xem thử.

### Assistant response
> Tôi đã đọc `Ex2/project_rules.md` và `TASK_DECOMPOSITION.md` ở thư mục gốc (trong Ex2 không có bản riêng). Tôi hiểu yêu cầu là xây dựng danh bạ nhà khoa học bằng React 19/Vite với tìm kiếm tên, lọc IQ tối thiểu, sắp xếp IQ giảm dần hoặc tuổi tăng dần, xóa/khôi phục danh sách, trạng thái kết quả dễ tiếp cận và giao diện đáp ứng ở 375px. Dữ liệu gồm sáu bản ghi có ID cố định. Chỉ lưu state độc lập; kết quả lọc/sắp xếp được tính khi render, sắp xếp bất biến. Cần hỗ trợ bàn phím, focus rõ ràng và phục hồi focus khi xóa. Kế hoạch chia thành 13 task/commit; chỉ ghi nhận hoàn tất khi đã kiểm chứng, không tạo bằng chứng giả. Quy tắc yêu cầu chỉ làm trong Ex2 nên cần lưu ý không chỉnh tài liệu ở thư mục gốc.

### User prompt
> mỗi lần tôi prompt, chúng ta trò chuyện, hãy lưu vào prompt_log.md nhé, trừ các lệnh commit

### Assistant response
> Đã ghi hai prompt thực tế trong cuộc trò chuyện này vào `Ex2/prompt_log.md`. Tôi sẽ ghi các prompt tiếp theo vào file đó, ngoại trừ prompt chỉ yêu cầu commit.

### User prompt
> đưa thêm phản hồi của bạn nx

### Assistant response
> Tôi sẽ ghi cả prompt lẫn phản hồi của mình vào `Ex2/prompt_log.md`, bỏ qua prompt chỉ yêu cầu commit; nội dung log sẽ phản ánh đúng các lượt trao đổi thực tế.

### User prompt
> Tôi đang làm— Scientist Directory.
>
> Đọc:
> - Ex2/project_rules.md
> - Ex2/task_decomposition.md
> Quy tắc:
> - Chỉ sửa Ex2/, không sửa Ex1/.
> - Mỗi lần chỉ làm task tôi chỉ định.
> - Kiểm tra code hiện tại trước, không tạo đè phần đã hoàn thành.
> - Không tự commit/push.
> - Không tự đánh dấu task đã được tôi kiểm tra.
> - Sau mỗi task: liệt kê file sửa, giải thích ngắn và đưa cách kiểm tra.
> - Ghi prompt thực tế vào prompt_log.md; kết quả tôi chưa kiểm tra
>   phải ghi "Pending".
> - Không bịa lỗi AI, kết quả kiểm tra hoặc ảnh minh chứng.
>
> Bây giờ chỉ đọc và tóm tắt quy tắc, chưa sửa code.
>
> Tôi ghi lại để bạn lưu tâm

### Assistant response
> Đã ghi nhận các quy tắc làm việc cho Scientist Directory. Tôi sẽ chỉ thực hiện task bạn chỉ định, kiểm tra trước khi sửa, không tự commit/push hay đánh dấu task đã được bạn kiểm tra; sẽ ghi prompt và phản hồi thực tế vào log, đồng thời ghi "Pending" cho kết quả bạn chưa kiểm tra. Trong lượt này tôi không sửa code.

### User prompt
> Task01:
> Kiểm tra scaffold React/Vite hiện tại trong Ex2/.
> Giữ StrictMode trong main.jsx.
> Bỏ giao diện và asset demo không còn dùng.
> App chỉ hiển thị main, h1 "Scientist Directory"
> và đoạn "Lab 3 — Exercise 2".
>
> Chưa tạo dataset hoặc chức năng.
> Chạy lint/build nếu có thể và báo kết quả thực tế.

### Assistant response
> Đã thay giao diện demo bằng `main` chỉ có tiêu đề “Scientist Directory” và đoạn “Lab 3 — Exercise 2”; giữ nguyên `StrictMode`. Xóa CSS và asset demo không còn dùng; cập nhật title trang thành “Scientist Directory”. Chưa tạo dataset hay chức năng.
>
> Kiểm tra thực tế: `npm run lint` — Passed; `npm run build` — Passed (Vite build hoàn tất).
>
> Bạn kiểm tra giao diện/task: Pending.

## Task: Remove subtitle and add audit template

### Prompt thực tế
> Giữ nguyên nội dung project_rules.md và task_decomposition.md
> tôi đã cung cấp; chỉ báo nếu phát hiện mâu thuẫn.
>
> Tạo prompt_log.md nếu chưa có, với các mục:
> task, prompt thực tế, file sửa, kết quả kiểm tra, commit.
>
> Tạo AI_FAILURE_AUDIT.md nếu chưa có:
> - Trạng thái ban đầu: chưa có lỗi được xác minh.
> - Khung mỗi lỗi: prompt, code gốc, bước tái hiện,
>   expected/actual, nguyên nhân, fix, retest, evidence, commit.
> - Không điền lỗi giả định thành lỗi đã gặp.
>
> Chưa triển khai chức năng.
> -Xóa chữ Lab03 - Ex2 đi

### File sửa
- `src/App.jsx`
- `AI_FAILURE_AUDIT.md`
- `prompt_log.md`

### Kết quả kiểm tra
- `npm run lint`: Passed.
- `npm run build`: Passed.
- Người dùng kiểm tra giao diện/thay đổi: Pending.

### Commit
Không tạo commit theo yêu cầu.

## Task: Push all pending Ex2 files

### Prompt thực tế
> push hết lên

### Phản hồi
> Đã commit các file Ex2 còn chưa được theo dõi và push branch `EX2` lên GitHub. README hiện vẫn là nội dung mẫu mặc định của Vite; chưa tự biên soạn tài liệu Task 13.

### File sửa
- `prompt_log.md`
- `README.md`
- `AI_FAILURE_AUDIT.md`

### Kết quả kiểm tra
Pending

### Commit
Pending

## Task 08: Delete scientists and recover focus

### Prompt thực tế
> Thêm nút xóa mỗi người, accessible name chứa tên người.
> Xóa bằng person.id, dùng functional setter và filter().
> Giữ nguyên các bộ lọc và chế độ sort.
>
> Sau khi xóa:
> - Focus nút xóa của người tiếp theo trong danh sách đang hiển thị.
> - Nếu không có, focus người trước đó.
> - Nếu không còn kết quả, focus nút Reset.
>
> Có thể tạo nút Reset làm điểm focus dự phòng;
> chưa cần hoàn thiện hành vi reset.
> Dùng refs phù hợp, không truy vấn DOM toàn trang.

### Phản hồi
> Đã thêm nút xóa có accessible name nhận diện từng người; thao tác xóa theo ID bằng cập nhật state hàm và `filter()`. Sau khi xóa, focus chuyển đến nút xóa kế tiếp, hoặc nút trước nếu không còn nút kế tiếp; nếu danh sách đang hiển thị hết kết quả thì chuyển focus tới Reset. Bộ lọc và lựa chọn sort không bị thay đổi. Reset hiện chỉ là điểm focus dự phòng, chưa thực hiện hành vi khôi phục.

### File sửa
- `src/components/ScientistDirectory.jsx`
- `src/components/ScientistList.jsx`
- `prompt_log.md`

### Kết quả kiểm tra
- `npm run lint`: Passed.
- `npm run build`: Passed.
- Kiểm tra trình duyệt: xóa bằng Space chuyển focus sang người kế tiếp (Goethe → Einstein) hoặc người trước (xóa người cuối Leonardo da Vinci → James Maxwell).
- Kiểm tra trình duyệt: khi xóa kết quả duy nhất đang hiển thị, focus chuyển đến Reset.
- Kiểm tra trình duyệt: query `a`, IQ tối thiểu `190` và sort `age-asc` được giữ nguyên sau khi xóa James Maxwell; danh sách còn lại vẫn theo thứ tự tuổi tăng dần.
- Người dùng kiểm tra: Pending.

### Commit
Không tạo commit theo yêu cầu.

## Task: Explain scaffold commit message

### Prompt thực tế
> chore(ex2) là gì

### Phản hồi
> `chore` là loại commit theo quy ước Conventional Commits, thường dùng cho thay đổi bảo trì/cấu hình không thêm tính năng người dùng. `ex2` là phạm vi (scope), cho biết commit áp dụng cho bài Exercise 2. Vì vậy `chore(ex2): scaffold React directory app` nghĩa là “thực hiện công việc khởi tạo scaffold React cho Ex2”.

### File sửa
- `prompt_log.md`

### Kết quả kiểm tra
Không áp dụng — chỉ giải thích thuật ngữ.

### Commit
Không tạo commit mới.

## Task 03: Create the scientist dataset

### Prompt thực tế
> làm Task 03,tạo Ex2/src/data/smartPeople.js, export SMART_PEOPLE:
>
> [
>   { id: 'sp-1', name: 'Johann Goethe', age: 82, iq: 210 },
>   { id: 'sp-2', name: 'Albert Einstein', age: 76, iq: 205 },
>   { id: 'sp-3', name: 'Leonardo da Vinci', age: 67, iq: 180 },
>   { id: 'sp-4', name: 'Isaac Newton', age: 84, iq: 190 },
>   { id: 'sp-5', name: 'James Maxwell', age: 48, iq: 190 },
>   { id: 'sp-6', name: 'William Sidis', age: 46, iq: 200 }
> ]
>
> ID cố định, duy nhất; age và iq là number.
> Chưa làm giao diện hoặc chức năng.

### File sửa
- `src/data/smartPeople.js`
- `prompt_log.md`

### Kết quả kiểm tra
- Dataset assertion: Passed — đúng 6 bản ghi/giá trị, ID duy nhất và cố định, `age`/`iq` là number.
- `npm run lint`: Passed.
- `npm run build`: Passed.
- Người dùng kiểm tra: Pending.

### Commit
Không tạo commit theo yêu cầu.

## Task: Change Vite development port

### Prompt thực tế
> thay đổi cổng localhost 5173 thành cổng khác đi

### File sửa
- `vite.config.js`
- `prompt_log.md`

### Kết quả kiểm tra
- `npm run lint`: Passed.
- `npm run build`: Passed.
- Người dùng kiểm tra: Pending.

### Commit
Không tạo commit theo yêu cầu.

## Render the semantic directory

### Prompt thực tế
> Chỉ làm Task 04.
>
> Tạo ScientistDirectory nhận initialData = SMART_PEOPLE.
> Khởi tạo people bằng useState từ initialData.
> Tạo ScientistList để hiển thị tên, tuổi và IQ bằng ul/li.
> Dùng key={person.id}.
> Tích hợp vào App với semantic HTML và heading hợp lý.
>
> Chưa thêm search, filter, sort hoặc delete/reset.

### Phản hồi
> Đã tạo `ScientistDirectory` nhận `initialData` mặc định từ `SMART_PEOPLE`, khởi tạo `people` bằng `useState`, và render danh sách semantic qua `ScientistList` với khóa `person.id`. Đã tích hợp directory dưới heading chính trong `App`; không thêm search, filter, sort, delete hoặc reset.

### File sửa
- `src/components/ScientistDirectory.jsx`
- `src/components/ScientistList.jsx`
- `src/App.jsx`
- `prompt_log.md`

### Kết quả kiểm tra
- Render check: Passed — semantic `main`/heading/`ul`, sáu `li`, tên, tuổi và IQ được render.
- `npm run lint`: Passed.
- `npm run build`: Passed.
- Người dùng kiểm tra: Pending.

### Commit
Không tạo commit theo yêu cầu.