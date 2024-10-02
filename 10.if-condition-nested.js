/**
 * CÂU HỎI: NESTED IF CONDITION - ĐIỀU KIỆN IF LỒNG NHAU
 * 
 * YÊU CẦU:
    +   Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
 */

let price = 100;
const discount = false;
const discountAmount = 30;
const country = "Việt Nam";
const student = true;

if (discount === true) {
    price -= discountAmount;
} 

else if (country === "Việt Nam") {
    if (student === true) {
        price -= discountAmount + 30;
    } 
    else {
        price -= discountAmount + 10;
    }
} 

else {
  price -= 10;
}

console.log(price);