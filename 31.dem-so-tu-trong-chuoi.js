/**
 * CÂU HỎI: Đếm số từ trong một chuỗi
 * 
 * YÊU CẦU:
    - Viết một chương trình JavaScript nhận đầu vào là một chuỗi và trả về số từ trong chuỗi đó.

    - Ví dụ:
        - Đầu vào là "    JavaScript là một ngôn ngữ lập trình   " ⇒ Đầu ra là 7
        
        - Đầu vào là "Xin chào, mình là 28Tech!" ⇒ Đầu ra là 5
*/

function demSoTu (str) {
    if(str === "") return 0;
    
    str = str.trim(); // loại bỏ khoảng trắng đầu cuối

    let arr = str.split(" ");

    return arr.length;
}

let vidu_01 = demSoTu("    JavaScript là một ngôn ngữ lập trình   ");
let vidu_02 = demSoTu("Xin chào, mình là 28Tech!");
let vidu_03 = demSoTu("");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
