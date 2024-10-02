/**
 * CÂU HỎI: IF CONDITION - ĐIỀU KIỆN IF
 * 
 * YÊU CẦU:
    +   Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
 */

let price = 100;
const discount = true;
const discountAmount = 30;
const country = "Việt Nam";

if (discount === true) {
    price -= discountAmount;
} 
else if (country === "Thái Lan") {
    price -= 40;
} else if (country === "Hàn Quốc") {
    price -= 50;
} 
else {
    price -= 10;
}

console.log(price);