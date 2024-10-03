/**
 * CÂU HỎI: Trả về ký tự ở giữa của chuỗi
 * 
 * YÊU CẦU:
    - Viết một hàm nhận vào một chuỗi và trả về ký tự ở giữa của chuỗi đó.

    - Nếu độ dài của chuỗi là lẻ, trả về ký tự ở giữa.
    
    - Nếu độ dài của chuỗi là chẵn, trả về hai ký tự ở giữa.

    +   Tất cả các trường hợp kiểm tra đều chứa một từ duy nhất (dưới dạng một chuỗi).
*/

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

function getMiddle(str) {
    const sz = str.length;

    const middle_index = Math.floor(sz / 2);

    //  trường hợp chỉ có một chữ duy nhất hoặc chuỗi có độ dài lẻ
    if(sz % 2 == 1) {
        
        return str[middle_index];
    } 

    // trường hợp độ dài chuỗi chẵn
    let middle_index_left  = middle_index - 1;

    return [str[middle_index_left], str[middle_index_right]].join("");
}


/**
 * VÌ DECLARTION FUNCTION THUỘC DẠNG HOISTING NÊN CÓ THỂ SỬ DỤNG HÀM TRƯỚC KHI GHI KHAI BÁO
 */

// ------------------- CÁCH 2 ---------------------------------//
function getMiddle(word) {
    const length = word.length;
    const middleIndex = Math.floor(length / 2); // Lấy ra vị trí của từ ở giữa, Math.floor để làm tròn xuống.
    if (length % 2 === 0) {
      // Nếu độ dài là số chẵn, trả về hai ký tự ở giữa
      return word.slice(middleIndex - 1, middleIndex + 1);
    } else {
      // Nếu độ dài là số lẻ, trả về ký tự ở giữa
      return word.charAt(middleIndex);
    }
}
  
  // Kiểm tra các trường hợp
  console.log(getMiddle("test")); // ➞ "es"
  console.log(getMiddle("testing")); // ➞ "t"
  console.log(getMiddle("middle")); // ➞ "dd"
  console.log(getMiddle("A")); // ➞ "A"