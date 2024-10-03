/**
 * CÂU HỎI: Chuyển đổi một câu thành chuỗi viết tắt
 * 
 * YÊU CẦU:
    - Viết một chương trình JavaScript nhận đầu vào là một câu và chuyển đổi nó thành chuỗi viết tắt theo quy tắc sau:

        - Loại bỏ các khoảng trắng ở đầu và cuối câu (nếu có).
        
        - Chuyển đổi các từ thành chữ viết tắt bằng cách lấy ký tự đầu tiên của mỗi từ (trừ từ 'và') và thêm dấu chấm sau mỗi từ.
*/

const vietTat = (str) => {
    // loại bỏ khoảng trắng  ở đầu và cuối câu
    str = str.trim();

    // phân rã chuỗi thành mảng tách theo khoảng trắng
    let arr = str.split(" ");

    // duyệt mảng
    for(let index in arr) {
        if(arr[index] === "và") continue;


        arr[index] = arr[index].charAt(0).toUpperCase() + `.`;
    }

    str = arr.join(" ");
    console.log(str);
}


vietTat(" Học và lập trình là thú vị   ")
vietTat(" Công ty Công Nghệ và Dịch Vụ DACA ")
// " Học và lập trình là thú vị   " ➞ "H. và L. T. L. T. V."
 
// " Công ty Công Nghệ và Dịch Vụ DACA "  ➞ "C. T. C. N. và D. V. D."
