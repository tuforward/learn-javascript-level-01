/**
 * CÂU HỎI: Ba Số Là Bộ Ba Pythago
 * 
 * YÊU CẦU:
    +   Tạo một hàm kiểm tra xem ba số nguyên đã cho có tạo thành một bộ ba Pythago không. 
    
    +   Tổng của bình phương của hai số nhỏ nhất phải bằng bình phương của số lớn nhất để được xác nhận đúng.

    +   Ghi chú: Các số có thể không được cho theo thứ tự tăng dần.
*/

// ---------------- CÁCH CỦA GIANG ---------------------------//
const isPythago = (...restParams) => {
    restParams.sort( (a, b) => a - b); // sắp xếp tăng dần
    
    // tổng bình phương 2 số nhỏ nhất
    let a = restParams[0];
    let b = restParams[1];
    let tongBinhPhuong2SoNhoNhat = Math.pow(a, 2) + Math.pow(b, 2);

    // bình phương số lớn nhất
    let c = restParams[2];
    let binhPhuongSoLonNhat = Math.pow(c, 2);

    return (binhPhuongSoLonNhat === tongBinhPhuong2SoNhoNhat);
}

let vidu_01 = isPythago(3, 4, 5);
let vidu_02 = isPythago(13, 5, 12);
let vidu_03 = isPythago(1, 2, 3);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("----------------------------------------------------------------");

// ---------------- CÁCH KHÁC ---------------------------//
const isPythago_02 = function() {
    let sum = 0;
    for(const element of arguments) {
        sum += element;
    }

    let min = Math.min(...arguments); // tìm min
    let max = Math.max(...arguments); // tìm max

    // tìm số còn lại = cách cộng 3 số rồi trừ min và max
    let soNamGiua = sum - min - max;

    // Bình phương 2 số nhỏ nhất
    let tongBinhPhuong2SoNhoNhat = (min * min) + (soNamGiua * soNamGiua);

    // Bình phương số lớn nhất
    let binhPhuongSoLonNhat = (max * max);

    return (tongBinhPhuong2SoNhoNhat === binhPhuongSoLonNhat);
}

let vidu_04 = isPythago_02(3, 4, 5);
let vidu_05 = isPythago_02(13, 5, 12);
let vidu_06 = isPythago_02(1, 2, 3);


console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);