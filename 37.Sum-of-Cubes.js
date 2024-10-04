/**
 * CÂU HỎI: Sum of Cubes (Tổng các khối lập phương)
 * 
 * YÊU CẦU:
    -   Tạo một hàm nhận vào một mảng các số và trả về tổng của các lập phương của chúng.
    
    -   Ghi chú: Nếu cho một mảng trống, trả về 0.
*/

const sumOfCubes = function (arr) {
    if(arr.length === 0) return 0; // trường hợp mảng bị rỗng

    let cubes = 0; // lưu kết quả tổng lập phương

    for(let item of arr) {
        cubes += Math.pow(item, 3);
    }

    return cubes;
}


let vidu_01 = sumOfCubes([1, 5, 9]);
let vidu_02 = sumOfCubes([3, 4, 5]);
let vidu_03 = sumOfCubes([2]);
let vidu_04 = sumOfCubes([]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

/** 
*    sumOfCubes([1, 5, 9]) ➞ 855
    // Vì 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

    sumOfCubes([3, 4, 5]) ➞ 216

    sumOfCubes([2]) ➞ 8

    sumOfCubes([]) ➞ 0
 */