/**
 * CÂU HỎI: Tính tổng và trung bình của các số
 * 
 * YÊU CẦU:
    - Viết một chương trình JavaScript để tính tổng và trung bình của một dãy số nhập vào từ người dùng.
    
    - Yêu cầu người dùng nhập vào một dãy số, mỗi số cách nhau bằng dấu phẩy.

    - Tính tổng của tất cả các số và hiển thị ra màn hình console.
    
    - Tính trung bình của các số (nếu có) và hiển thị ra màn hình console với độ chính xác hai chữ số sau dấu thập phân, sử dụng toFixed() để làm tròn.
*/

/**         LƯU Ý
 * 
    - Nếu một trong các giá trị nhập không phải là số, bỏ qua giá trị đó và tính tổng, trung bình của các số hợp lệ.

    - Nếu không có số hợp lệ nào, hiển thị thông báo "Không có số hợp lệ để tính".
 */


function SumAverage ()  {
    let numberOfIsNumber = 0;
    let sum = 0;
    let avr = 0;

    // tính tổng các số
    for(let index = 0 ; index < arguments.length ; index++) {
        if(typeof arguments[index] === "number") {
            numberOfIsNumber++;
            sum += arguments[index];
        }
    }
    sum = sum.toString(); // chuyển về dạng chuỗi, có hay không cũng được thôi

    // tính tổng trung bình
    avr = sum / numberOfIsNumber;
    avr = avr.toFixed(2);

    return [sum, avr];
}


let vidu_01 = SumAverage(5, 8, 10, "abc", 12);
let vidu_02 = SumAverage(10, 20, 30);

console.log(vidu_01);
console.log(vidu_02);
/**
 * - Ví dụ:
 * 
    - Đầu vào là **"5, 8, 10, abc, 12"** ⇒ Đầu ra là:
        - Tổng các số là: **35**
        - Trung bình các số là: **8.75**
        
    - Đầu vào là **"10, 20, 30"** ⇒ Đầu ra là:
        - Tổng các số là: **60**
        - Trung bình các số là: **20.00**
 */


// -------------------- CÁCH KHÁC ------------------------------ //
// Nhận dãy số từ người dùng
var input = prompt("Nhập vào một dãy số, mỗi số cách nhau bằng dấu phẩy:");

// Chia chuỗi thành mảng các số
var numbers = input.split(",");

var sum = 0;
var count = 0;

// Tính tổng và đếm số lượng số hợp lệ
for (var i = 0; i < numbers.length; i++) {
  if (!isNaN(numbers[i])) {
    sum += parseFloat(numbers[i]);
    count++;
  }
}

// Kiểm tra nếu có số hợp lệ để tính
if (count > 0) {
    var average = sum / count;
    console.log("Tổng các số là: " + sum);
    console.log("Trung bình các số là: " + average.toFixed(2));
} 
else {
    console.log("Không có số hợp lệ để tính.");
}