/**
 * CÂU HỎI: Tổng các phần tử số trong một mảng
 * 
 * YÊU CẦU:
    -   Các phần tử của mảng có thể có các kiểu dữ liệu khác nhau. Hãy tính tổng tất cả các phần tử có kiểu number trong mảng đã cho. Tạo một hàm nhận vào một mảng và trả về tổng của tất cả các số trong mảng.
*/

let numbersSum = (arr) => {
    let ans = 0; // lưu trữ kết quả

    for(let item of arr) {
        if(typeof item === "number")
            ans = ans + item;
    }

    return ans;
}

let vidu_01 = numbersSum([1, 2, "13", "4", "645"]);
let vidu_02 = numbersSum([true, false, "123", "75"]);
let vidu_03 = numbersSum([1, 2, 3, 4, 5, true]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

/**
 *  numbersSum([1, 2, "13", "4", "645"]) ➞ 3

    numbersSum([true, false, "123", "75"]) ➞ 0

    numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
 */