/**                        TÌM SỐ THIẾU
 * YÊU CẦU:
    +   Tạo một hàm nhận vào một mảng các số từ 1 đến 10 (trừ một số) và trả về số thiếu.

    - Mảng các số sẽ không được sắp xếp (không theo thứ tự).
    - Chỉ có một số sẽ bị thiếu.
*/

// ------------------   CÁCH 1   ------------------//
function missingNum(array) {
    // tính tổng số từ 1 đến 10
    let sum = (10 * 11) / 2; // cong thuc n*(n-1) / 2

    for(let element of array) {
        sum -= element;
    }

    return sum;
}

let vidu_01 = missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
let vidu_02 = missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]);
let vidu_03 = missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("----------------------------------------------------------");

// ------------------   CÁCH 2   ------------------//
const missingNumXOR = (array) => {
    let xor1 = 0;
    let xor2 = 0;

    for(let index = 0 ; index < array ; index++) {
        xor1 ^= array[index];
        xor2 ^= (index + 1);
    }

    // vì xor2 chắc chắn sẽ thiếu số cuỗi nên cần xor với cái số lớn nhất
    xor2 ^= 10;

    return xor1 ^ xor2;
}

let vidu_04 = missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
let vidu_05 = missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]);
let vidu_06 = missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);


console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);