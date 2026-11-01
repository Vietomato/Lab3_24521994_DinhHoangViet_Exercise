# Ex3 Prompt Log

## 2026-11-01

### Prompt 1

> Đọc Ex3/project_rules.md và Ex3/task_decomposition.md.
> Chỉ sửa Ex3/, không sửa các file dự án khác.
> Mỗi lần chỉ thực hiện task được chỉ định.
> Không tự commit/push.
> Không bịa kết quả kiểm tra, ảnh hoặc lỗi AI.
>
> Sau mỗi task:
> - Liệt kê file thay đổi.
> - Giải thích ngắn logic.
> - Đưa bước tự kiểm tra và kết quả kỳ vọng.
> - Ghi prompt thực tế vào prompt_log, kết quả chưa kiểm tra để Pending.
>
> Bây giờ chỉ đọc tài liệu, chưa triển khai chức năng.

- **Outcome:** Đã đọc hai tài liệu; chưa triển khai chức năng hoặc chạy kiểm tra.
- **Checks:** Pending (chưa được yêu cầu ở bước chỉ đọc tài liệu).

### Prompt 2

> oke, tạo lưu prompt riêng trng ex3

- **Outcome:** Tạo file log riêng trong `Ex3/` và ghi lại các prompt Ex3 liên quan.
- **Checks:** Pending.

### Prompt 3

> Tạo src/data/pubgSquads.js, export PUBG_VN_SQUADS:
>
> [
>   {
>     id: 'ces',
>     name: 'Cerberus Esports',
>     map: 'Erangel',
>     phase: 'Phase 6',
>     alive: 4,
>     kills: 14,
>     wwcdProb: '68%',
>     status: 'In Safe Zone'
>   },
>   {
>     id: 'te',
>     name: 'The Expendables',
>     map: 'Miramar',
>     phase: 'Phase 7',
>     alive: 4,
>     kills: 18,
>     wwcdProb: '82%',
>     status: 'Holding High Ground'
>   },
>   {
>     id: 'ge',
>     name: 'Genius Esports',
>     map: 'Taego',
>     phase: 'Phase 5',
>     alive: 3,
>     kills: 9,
>     wwcdProb: '41%',
>     status: 'Rotating Blue Zone'
>   }
> ]
>
> Đây là dữ liệu mô phỏng của bài tập.
> Chưa làm service hoặc giao diện chọn đội.

- **Outcome:** Added the `PUBG_VN_SQUADS` mock dataset with the three specified squads. No service or squad-selection UI was added.
- **Checks:** `npm run lint` passed. A Node assertion confirmed all three records and all requested fields match the specified fixture.

### Prompt 4 (technical rewrite)

>Triển khai riêng `src/services/telemetryApi.js` với hàm được export
> `fetchKraftonPubgTelemetry(squadId, options)`.
>
> - Hàm trả về một `Promise`, mô phỏng độ trễ trước khi hoàn tất, sau đó trả
>   về bản sao của dữ liệu đội tương ứng trong `PUBG_VN_SQUADS`.
> - Mặc định `failureRate` là `0.35`. Cho phép truyền `delayMs` và
>   `failureRate` qua `options` để có thể cấu hình kết quả kiểm thử.
> - Sau khoảng delay, dùng đúng điều kiện
>   `Math.random() < failureRate` để quyết định mô phỏng lỗi.
> - Nếu `squadId` không khớp đội nào, Promise phải bị reject với thông báo
>   nêu rõ ID không tồn tại.
> - Giữ chỗ `options.signal` trong API cho Task 05; ở task này chưa triển
>   khai hoặc tuyên bố hỗ trợ abort.
> - Chưa kết nối service với React hoặc giao diện.
>
> Sau khi triển khai, hướng dẫn cách kiểm tra xác định với `failureRate: 0`
> (luôn thành công) và `failureRate: 1` (luôn mô phỏng lỗi). Chỉ báo kết quả
> kiểm tra nếu thực sự đã chạy.

- **Outcome:** Implemented the delayed mock service with configurable delay/failure, clear rejection for unknown IDs, and a shallow copy on success. `options.signal` is reserved in the API documentation; abort behavior is not implemented. The service is not connected to React.
- **Checks:** `npm run lint` passed. Deterministic success (`failureRate: 0`) and failure (`failureRate: 1`), unknown ID rejection, delay, and returned-object copy checks passed with a Node script.

### Prompt 5

> Hoàn thiện SUCCESS view bằng article và dl/dt/dd.
> Hiện tên đội, map, phase, alive, kills, wwcdProb và status.
> Có dòng ghi rõ đây là dữ liệu mô phỏng.
> Không dùng dangerouslySetInnerHTML hoặc alert.
> Không đổi logic fetch.

- **Outcome:** Added semantic success details with an explicit simulated-data notice. Fetch logic was not changed in this task.
- **Checks:** `npm run lint` and `npm run build` passed. Browser inspection confirmed the SUCCESS view renders an `article`, all six requested `dt`/`dd` values for Cerberus Esports, and the simulated-data notice. Search found no `dangerouslySetInnerHTML` or alert calls under `src/`.
