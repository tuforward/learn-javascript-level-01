/**
 * CÂU HỎI: Loại bỏ các ký tự trùng lặp trong một chuỗi
 * 
 * YÊU CẦU:
    - Viết một chương trình JavaScript nhận đầu vào là một chuỗi và loại bỏ các ký tự trùng lặp, chỉ giữ lại mỗi ký tự một lần.
    
    - Loại bỏ các khoảng trắng ở đầu và cuối chuỗi.

    - Chuyển đổi chuỗi thành chữ thường.
    
    - Tạo một chuỗi mới chỉ chứa các ký tự không trùng lặp.
*/

// ---------- SỬ DỤNG MAP ĐÁNH DẤU ---------------------//
const loaiBo = function (str) {
    str = str.trim();   // xóa dấu cách đầu cuối 
    str = str.toLowerCase(); // chuyển nguyên chuỗi về dạng chữ thường
    
    let mpp = new Map();
    
    for(let item of str) {
        if(mpp.has(item) === false) {
            mpp.set(item, 1); // đánh dấu kí tự
        }
    }

    let ans_str = ""; // chuỗi kết quả

    for(let [key, value] of mpp) {
        if(value === 1) { // nghĩa là kí tự này còn dùng được
            ans_str += key;
            mpp.delete(key);
        }
    }
    
    return ans_str;
}

let vidu_01 = loaiBo("Hello world");
let vidu_02 = loaiBo("Mississippi");
let vidu_03 = loaiBo("28Tech");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

// "Hello world" ➞ "helo wrd"

// "Mississippi" ➞ "misp"

// "28Tech" ➞ "28tech"