/**
 * CÂU HỎI: Lọc và Sắp Xếp Duy Nhất
 * 
 * YÊU CẦU:
    - Cho một mảng các số, viết một hàm trả về một mảng mới:
        - Loại bỏ tất cả các phần tử trùng lặp.
        - Sắp xếp từ nhỏ đến lớn.
*/

// ------------- SỬ DỤNG MAP -----------------------//
let vidu_01 = filterUnique([1, 2, 4, 3]);
let vidu_02 = filterUnique([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]);
let vidu_03 = filterUnique([6, 7, 3, 2, 1]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

function filterUnique (arr) {
    let mpp = new Map(); // khởi tạo map

    for(let element of arr) {
        if(mpp.has(element) == false) {
            mpp.set(element, 1);
        }
    } 

    let ans_arr = [];
    for(const [key,value] of mpp) {
        ans_arr.push(key);
    }

    ans_arr.sort((a, b) => a - b);

    return ans_arr;
} 

console.log("----------------------------")

// --------------- SỬ DỤNG MẢNG ĐỂ ĐÁNH DẤU --------------------------//

const filterUnique_02 = function (arr) {
    let maxElement = Math.max(...arr); // lấy ra phần tử lớn nhất trong mảng

    let hash_array = new Array(maxElement + 1).fill(0);

    for(let element of arr) {
        if(hash_array[element] === 0) {
            hash_array[element] = 1;
        }
    }

    let ans_arr = [];

    for(let index in hash_array) {
        if(hash_array[index]) {
            ans_arr.push(+index);
        }
    }

    return ans_arr;
}

let vidu_04 = filterUnique_02([1, 2, 4, 3])
let vidu_05 = filterUnique_02([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])
let vidu_06 = filterUnique_02([6, 7, 3, 2, 1])

console.log(vidu_04)
console.log(vidu_05)
console.log(vidu_06)


console.log("----------------------------")

// --------------- DUYỆT VÀ GET --------------------------//
const filterUnique_03 = (arr) => {
    // sắp xếp lại mảng trước
    arr.sort(function (a, b) {
        return a - b;
    });

    let ans_arr = []; // Mảng kết quả

    ans_arr.push(arr[0]); // đưa phần tử đầu tiên của mảng đã cho vào mảng kết quả

    for(let index = 1 ; index < arr.length ; index++) {
        if(arr[index-1] != arr[index])
            ans_arr.push(arr[index]);
    }

    return ans_arr;
}

let vidu_07 = filterUnique_03([1, 2, 4, 3])
let vidu_08 = filterUnique_03([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])
let vidu_09 = filterUnique_03([6, 7, 3, 2, 1])

console.log(vidu_07)
console.log(vidu_08)
console.log(vidu_09)

// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]


//  ----------- CÁCH KHÁC ---------------------//
function uniqueSort(arr) {
    // Loại bỏ tất cả các phần tử trùng lặp
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
  
    // Sắp xếp mảng uniqueArray
    for (let i = 0; i < uniqueArray.length; i++) {
      for (let j = i + 1; j < uniqueArray.length; j++) {
        if (uniqueArray[i] > uniqueArray[j]) {
          let temp = uniqueArray[i];
          uniqueArray[i] = uniqueArray[j];
          uniqueArray[j] = temp;
        }
      }
    }
  
    return uniqueArray;
}
  
  // Ví dụ
  console.log(uniqueSort([1, 2, 4, 3])); // ➞ [1, 2, 3, 4]
  console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); // ➞ [1, 2, 3, 4]
  console.log(uniqueSort([6, 7, 3, 2, 1])); // ➞ [1, 2, 3, 6, 7]