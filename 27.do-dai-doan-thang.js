/**
 * CÂU HỎI: Độ dài đoạn thẳng
 * 
 * YÊU CẦU:
    +  Viết một hàm nhận vào tọa độ của hai điểm trên một mặt phẳng hai chiều và trả về độ dài của đoạn thẳng nối hai điểm đó.

    - Lưu ý:
        - Thứ tự các số cho trước là X, Y.
        - Làm tròn kết quả đến hai chữ số sau dấu thập phân.
*/

function lineLength (line_01, line_02) {
    let x = Math.abs(line_01[0] - line_02[0]);
    let y = Math.abs(line_01[1] - line_02[1]);

    // bình phương
    x = x * x;
    y = y * y;

    let ans  = Math.sqrt(x + y);
    
    // làm tròn
    ans = parseFloat(ans.toFixed(2));

    return ans;
}

let vidu_01 = lineLength([15, 7], [22, 11]);
let vidu_02 = lineLength([0, 0], [0, 0]);
let vidu_03 = lineLength([0, 0], [1, 1]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

// lineLength([15, 7], [22, 11]) ➞ 8.06

// lineLength([0, 0], [0, 0]) ➞ 0

// lineLength([0, 0], [1, 1]) ➞ 1.41