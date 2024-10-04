/**
 * CÂU HỎI: Tìm từ dài nhất trong chuỗi
 * 
 * YÊU CẦU:
    - Viết một chương trình JavaScript nhận đầu vào là một chuỗi và trả về từ dài nhất trong chuỗi đó.
*/

const tuDaiNhat = function(str) {
    str = str.trim(); // loại bỏ khoảng trắng đầu cuối

    let arr = str.split(" "); // tách từ đưa vào mảng

    let maxLength = 0; // chuỗi có độ dài lớn nhất hiện tại là 0
    let wordOfMaxLength = "";
    for(let item of arr) {
        if(maxLength < item.length) {
            maxLength = item.length;
            wordOfMaxLength = item;
        }
    }

    return wordOfMaxLength;
}

let vidu_01 = tuDaiNhat(" JavaScript là ngôn ngữ lập trình phổ biến nhất ");
let vidu_02 = tuDaiNhat(" Mình là Le Van A ");

console.log(vidu_01);
console.log(vidu_02);

// " JavaScript là ngôn ngữ lập trình phổ biến nhất "
// ➞ "JavaScript"

// " Mình là Le Van A "
// ➞ "Mình"