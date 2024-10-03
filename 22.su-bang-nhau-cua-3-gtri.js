/**
 * CÂU HỎI: Tính Sự Bằng Nhau của 3 Giá Trị 
 * 
 * YÊU CẦU:
    +   Tạo một hàm nhận vào ba đối số số nguyên (a, b, c) và trả về số lượng các số nguyên có cùng giá trị.

    +   Hàm của bạn phải trả về 0, 2 hoặc 3.
        +   0 có nghĩa không có giá trị nào bằng nhau
        +   2 có nghĩa là có ít nhất hai giá trị bằng nhau
        +   3 có nghĩa là cả 3 giá trị bằng nhau
*/

// ---------------- SỬ DỤNG MAP --------------------//
function isEqual () {
    let mpp = new Map();

    let maxFreq = -1; // Lưu tần suất lớn nhất

    // method set giá trị trong map
    for(let index = 0 ; index < arguments.length ; index++) {
        let giaTri = arguments[index];

        // nếu giá trị đang xét chưa tồn tại trong map
        if(mpp.has(giaTri) === false) {
            mpp.set(giaTri, 1);
        }

        else {
            // tần suất hiện tại của giá trí
            let freq = mpp.get(giaTri) + 1;
            mpp.set(giaTri, freq);

            if(maxFreq < freq) maxFreq = freq;
        }
    }

    if(maxFreq === -1) return 0; // Nếu cả 3 giá trị truyền vào khác 0

    return maxFreq;
}

let vidu_01 = isEqual(3, 4, 3);
let vidu_02 = isEqual(1, 1, 1);
let vidu_03 = isEqual(3, 4, 1);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);


console.log("----------------------------------------------------------------");

// ------------------------- SỬ DỤNG IF ELSE --------------------------------//

const isEqual_02 = function() {
    console.log(arguments);
    // nếu cả 3 số bằng nhau 
    if(arguments[0] == arguments[1] && arguments[1] == arguments[2]) 
        return 3;

    // nếu 2 trong 3 số bằng nhau
    if(arguments[0] == arguments[1] || arguments[1] == arguments[2] || arguments[0] == arguments[2]) return 2;

    return 0;
}

let vidu_04 = isEqual_02(3, 4, 3);
let vidu_05 = isEqual_02(1, 1, 1);
let vidu_06 = isEqual_02(3, 4, 1);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);


console.log("----------------------------------------------------------------");

// ---------- HASH ARRAY ----------------//

const isEqual_03 = (...restParams) => {
    let maxElement = -Infinity;

    for(const element of restParams) {
        maxElement = Math.max(element, maxElement);
    }

    // tạo hash array
    let hash_array = new Array(maxElement + 1).fill(0);
    
    let maxFreq = 1;

    for(const element of restParams) {
        hash_array[element]++;
        if(maxFreq < hash_array[element]) maxFreq = hash_array[element];
    }

    return (maxFreq === 1 ? 0 : maxFreq);
}

let vidu_07 = isEqual_03(3, 4, 3);
let vidu_08 = isEqual_02(1, 1, 1);
let vidu_09 = isEqual_02(3, 4, 1);

console.log(vidu_07);
console.log(vidu_08);
console.log(vidu_09);