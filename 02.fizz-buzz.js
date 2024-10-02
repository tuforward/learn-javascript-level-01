/**                        BÀI TOÁN FIZZ BUZZ 
 * YÊU CẦU:
    +   Viết hàm kiểm tra đầu vào đã cho:
        -   Nếu đầu vào chia hết cho 3 in ra: "Fizz"

        -   Nếu đầu vào chia hết cho 5 in ra: "Buzz"

        -   Nếu đầu vào chia hết cho 3 và 5 in ra: "FizzBuzz"

        -   Nếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào

        -   Nếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"
*/

/**             VÍ DỤ
    - "one" —> Vui lòng nhập số!
    - true —> Vui lòng nhập số!
    - 9 —> Fizz
    - 10 —> Buzz
    - 30 —> FizzBuzz
    - 11 —> 11
 */

// lưu ý typeof trả về chuỗi nên cần so sánh với chuỗi nhe

const isFizzBuzz = (giaTri) => {
    if(typeof giaTri !== "number") return "Vui Lòng Nhập Số";
    
    // nếu chia hết cho cả 3 và 5
    if(giaTri % 3 == 0 &&  giaTri % 5 == 0) return "FizzBuzz";

    // nếu chia hết cho 3
    if(giaTri % 3 === 0) return "Fizz";

    if(giaTri % 5 === 0) return "Buzz";

    // Nếu không rơi vào các trường hợp trên
    return giaTri;
}

let vidu_01 = isFizzBuzz("one");
let vidu_02 = isFizzBuzz(true);
let vidu_03 = isFizzBuzz(9);
let vidu_04 = isFizzBuzz(10);
let vidu_05 = isFizzBuzz(30);
let vidu_06 = isFizzBuzz(11);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);
