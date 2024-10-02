/**
 * CÂU HỎI: SỐ NGUYÊN TỐ
 * 
 * YÊU CẦU:
    +   Viết chương trình nhập vào 1 số n. Dùng vòng lặp để lặp từ 2 đến n, kiểm tra xem các số đó có phải là số nguyên tố hay không? Nếu là số nguyên tố thì in ra: "Số nguyên tố: " + Số đó.
 */

const isPrime = (giaTri) => {
    for(let i = 2 ; i <= Math.sqrt(giaTri) ; i++) {
        if(giaTri % i == 0) return false; // không phải số nguyên tố
    }

    return giaTri > 1; // số nguyên tố phải > 1
}

let vidu_01 = isPrime(9);
let vidu_02 = isPrime(10);
let vidu_03 = isPrime(30);
let vidu_04 = isPrime(11);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);