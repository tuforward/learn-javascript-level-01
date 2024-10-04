/**
 * CÂU HỎI: GIẢI PHƯƠNG TRÌNH
 * 
 * YÊU CẦU:
    - Viết một hàm nhận vào một phương trình (ví dụ: "1+1") và trả về kết quả.

    - Ghi chú:  Các toán tử được hỗ trợ là +, -, và *
*/

const calc = (ketQua ) => {

}
const euqation = function(chuoi_phuong_trinh) {
    let soHang = [];
    let toanTu = [];
    let soHienTai = '';

    // lấy mảng số hạng và mảng toán tử
    for(let item of chuoi_phuong_trinh) {
        // Nếu kí tự đang xét hiện tại là chữ số
        if(!isNaN(item)) {
            soHienTai += item; // cộng vào để lỡ có là số hàng chục hàng trăm
        }
        else {
            soHang.push(parseInt(soHienTai)); // đưa số hiện tại vào mảng số hạng
            toanTu.push(item);
            soHienTai = ''; // reset số hiện tại
        }
    }
    soHang.push(parseInt(soHienTai)); // số cuối cùng trong chuỗi

    // tính phép nhân trước
    for(let index = 0 ; index < toanTu.length ; index++) {
        // nếu kí tự đang xét là phép * thì phần tử trong soHang[] cũng cùng index tương tự
        if(toanTu[index] === "*") {
            soHang[index] = soHang[index] * soHang[index+1];

            // xóa phần tử vừa nhân
            soHang.splice(index + 1, 1);
            // xóa toán tử nhân vừa nhân
            toanTu.splice(index, 1);

            index--;
        }
    }

    // console.log(soHang, toanTu);

    // tính phép cộng trừ
    let ketQua = soHang[0];
    for (let i = 1; i < soHang.length; i++) {
        if (toanTu[i - 1] === '+') {
            ketQua += soHang[i]; // Thực hiện phép cộng
        } else if (toanTu[i - 1] === '-') {
            ketQua -= soHang[i]; // Thực hiện phép trừ
        }
    }

    return ketQua; // Trả về kết quả
}

let vidu_01 = euqation("6+6*6-6");
let vidu_02 = euqation("7*4-2");
let vidu_03 = euqation("7*4*7-2");

console.log(vidu_01)
console.log(vidu_02)
console.log(vidu_03)
/**
 * equation("1+1") ➞ 2

    equation("7*4-2") ➞ 26

    equation("1+1+1+1+1") ➞ 5

    equation("6+6*6-6") ➞ 36

    equation("15+20*6-12") ➞ 123
 */