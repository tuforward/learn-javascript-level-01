/**                        MẢNG ĐỐI XỨNG
 * YÊU CẦU:
    +   Cho một mảng số nguyên, biến đổi mảng đó thành một mảng đối xứng.

    +   Không lặp lại phần tử cuối cùng của mảng đã cho.
*/

const isMirror = (...restParams) => {
    let left = 0;
    let right = restParams.length - 1;

    while(left < right) {
        if(restParams[left] != restParams[right]) return false;
        left++;
        right--;
    }
    return true;
}

let vidu_01 = isMirror([0, 2, 4, 6]);
let vidu_02 = isMirror([1, 2, 3, 4, 5]);
let vidu_03 = isMirror([3, 5, 6, 7, 8]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("---------------------------------------------------");

// -----------BIẾN ĐỔI----------- //
const taoMangDoiXung = function (arguments) {
    if(arguments.length < 2) return arguments;

    let arr = [];
    for(let index = 0 ; index < arguments.length ; index++) {
        arr.push(arguments[index]);
    }

    let indexGoto = arguments.length - 2;

    for(let startAt = indexGoto ; startAt >= 0 ; startAt--) {
        arr.push(arguments[startAt]);
    }

    return arr;
}

let vidu_04 = taoMangDoiXung([0, 2, 4, 6]);
let vidu_05= taoMangDoiXung([1, 2, 3, 4, 5]);
let vidu_06= taoMangDoiXung([3, 5, 6, 7, 8]);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);