/**
 * CÂU HỎI: Kiểm tra năm nhuận
 * 
 * YÊU CẦU:
    +   Kiểm tra 1 năm có phải là năm nhuận hay không? Nếu là năm nhuận trả về true, nếu không thì trả về false.

    - Năm nhuận là:
        - Chia hết cho 4 được và không chia hết cho 100 được.
        - Chia hết cho 100 sẽ được coi là năm nhuận nếu chúng cũng chia hết cho 400.
 */

const isNamNhuan = (year) => {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 == 0))   return true;

    return false;
}

let vidu_01 = isNamNhuan(2016);
let vidu_02 = isNamNhuan(1700);
let vidu_03 = isNamNhuan(1800);
let vidu_04 = isNamNhuan(2000);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);