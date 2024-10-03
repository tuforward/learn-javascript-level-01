/**
 * CÂU HỎI: TÌM GIÁ GIẢM GIÁ
 * 
 * YÊU CẦU:
    +   Viết một hàm nhận hai đối số: giá gốc và phần trăm giảm giá dưới dạng số nguyên và trả về giá cuối cùng sau khi giảm giá.

    +   Kết quả phải được làm tròn đến hai chữ số sau dấu thập phân.

*/

const discount = function (giaGoc, phanTramGiamGia) {
    let ketQua = giaGoc * (1 - phanTramGiamGia / 100);

    return Number(ketQua.toFixed(2));
}

let vidu_01 = discount(1500, 50);
let vidu_02 = discount(89, 20);
let vidu_03 = discount(100, 75);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);