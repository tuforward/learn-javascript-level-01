/**
 * CÂU HỎI: Số lớn nhất
 * 
 * YÊU CẦU:
    -   Tạo một hàm nhận vào hai đối số là một số n vả một mảng các số array, và trả về một mảng n số lớn nhất từ mảng đầu vào.
    
    - Mảng trả về phải được sắp xếp theo thứ tự tăng dần.
*/

function largestNumbers(n, arr) {
    if(n === 0 || n > arr.length) return []; // nếu mảng kết quả cần 0 phần tử thì trả về [rỗng]

    // sắp xếp lại mảng tăng dần
    arr.sort((a, b) => a - b);

    let ans = []; // mảng kết quả

    // lấy n phần tử cuối cùng
    for(let startAt = arr.length - n ; startAt < arr.length ; startAt++) {
        ans.push(arr[startAt]);
    }

    return ans; // mảng kết quả
}

let vidu_01 = largestNumbers(2, [4, 3, 2, 1]);
let vidu_02 = largestNumbers(1, [7, 19, 4, 2]);
let vidu_03 = largestNumbers(3, [14, 12, 57, 11, 18, 16]);
let vidu_04 = largestNumbers(0, [1, 3, 4, 2]);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

/**
 *  largestNumbers(n, array)

    largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

    largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

    largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

    largestNumbers(0, [1, 3, 4, 2]) ➞ []
 */