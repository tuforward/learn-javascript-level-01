/**
 * CÂU HỎI: MÁY TÍNH CƠ BẢN
 * 
 * YÊU CẦU:
    +   Tạo một hàm nhận vào hai số và một toán tử toán học + - / * và sẽ thực hiện một phép tính với hai số được cho.


- Ví dụ:
    - calculator(2, "+", 2) ➞ 4
    - calculator(2, "*", 2) ➞ 4
    - calculator(4, "/", 2) ➞ 2
- Lưu ý:
    - Nếu đầu vào chia cho 0, trả về: "Không thể chia cho 0!”
*/

// --------SỬ DỤNG DESIGN PATTERN---------//

const phepCong = (a, b) => a + b;
const phepTru  = (a, b) => a - b;
const phepNhan = (a, b) => a * b;
const phepChia = (a, b) => a / b;

const tinhToan = {
    "+": phepCong,
    "-": phepTru,
    "*": phepNhan,
    "/": phepChia
}

const calc = (soHangDau, phepToan, soHangSau) => {
    if(phepToan == "/" && soHangSau === 0) return "KHÔNG THỂ CHIA CHO 0";

    return tinhToan[phepToan](soHangDau, soHangSau);
}

let vidu_01 = calc(10, "+", 1);
let vidu_02 = calc(10, "/", 0);
let vidu_03 = calc(10, "*", 1);
let vidu_04 = calc(10, "-", 1);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);