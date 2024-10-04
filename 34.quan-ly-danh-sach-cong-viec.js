/**
 * CÂU HỎI: QUẢN LÝ DANH SÁCH CÔNG VIỆC
 * 
 * YÊU CẦU:
    - Hãy viết một chương trình JavaScript để quản lý danh sách công việc. Chương trình sẽ cho phép người dùng thêm công việc mới vào danh sách và hiển thị danh sách công việc.
    
    1. Tạo một danh sách công việc ban đầu rỗng.

    2. Hiển thị menu cho phép người dùng chọn các tùy chọn sau:
        - Thêm công việc mới.
        - Hiển thị danh sách công việc.
        - Thoát chương trình.

    3. Nếu người dùng chọn "Thêm công việc mới", yêu cầu họ nhập tên công việc và thêm công việc đó vào danh sách sử dụng hàm push().

    4. Nếu người dùng chọn "Hiển thị danh sách công việc", hiển thị tất cả các công việc trong danh sách ra màn hình.

    5. Nếu người dùng chọn "Thoát chương trình", kết thúc chương trình.
*/

// BÀI NÀY TUI SẼ SỬ DỤNG MODULE READLINE TRÊN TERMINAL //
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter Your Name: ', (input) => {
//     console.log(`Your Name is : ${input}`);
//     rl.close();
// });

// Tạo một danh sách công việc ban đầu rỗng.
var danhSachCongViec = [];

while (true) {
    // Hiển thị menu cho phép người dùng chọn
    var luaChon = prompt(`
        Chọn tùy chọn:
        1. Thêm công việc mới
        2. Hiển thị danh sách công việc
        3. Thoát chương trình
    `);

    if (luaChon === "1") { // Thêm công việc mới vào danh sách
        var tenCongViec = prompt("Nhập tên công việc:");
        danhSachCongViec.push(tenCongViec);
        console.log("Công việc đã được thêm vào danh sách.");
    }

    else if (luaChon === "2") { // Hiển thị danh sách công việc
        if (danhSachCongViec.length === 0) {
            console.log("Danh sách công việc đang trống.");
        } 
        else {
            console.log("Danh sách công việc:");
            for (var i = 0; i < danhSachCongViec.length; i++) {
                console.log(i + 1 + ". " + danhSachCongViec[i]);
            }
        }
    }
    else if (luaChon === "3") { // Thoát chương trình
        console.log("Chương trình đã kết thúc.");
        break;
    }
    else { // Lựa chọn không hợp lệ
        console.log("Tùy chọn không hợp lệ.");
    }
}