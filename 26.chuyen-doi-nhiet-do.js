/**
 * CÂU HỎI: CHUYỂN ĐỔI NHIỆT ĐỘ
 * 
 * YÊU CẦU:
    - Viết một chương trình nhận đầu vào là nhiệt độ ở đơn vị Celsius và chuyển đổi nó sang Fahrenheit và Kelvin.
    
    - Trả về các giá trị nhiệt độ chuyển đổi trong một mảng.
    
    - Công thức để tính nhiệt độ trong Fahrenheit từ Celsius là:
        +   F = C * 9/5 + 32

    -   Công thức để tính nhiệt độ trong Kelvin từ Celsius là:
        +   K = C + 273.15
*/

/**
    - Trả về các giá trị nhiệt độ tính đến hai chữ số thập phân.
    
    - Trả về "Invalid" nếu K nhỏ hơn 0.
 */

const chuyenDoiNhietDo = (celsius) => {
    // chuyển sang fa
    let fa = celsius * 1.8 + 32;

    // chuyển sang kevil
    let ke = celsius + 273.15;

    // làm tròn 
    fa = Math.round(fa * 100) / 100;
    ke = Math.round(ke * 100) / 100;

    if(ke === 0) ke = "Invalid";

    return [fa, ke];
}

let vidu_01 = chuyenDoiNhietDo(0);
let vidu_02 = chuyenDoiNhietDo(100);
let vidu_03 = chuyenDoiNhietDo(-10);
let vidu_04 = chuyenDoiNhietDo(300.4);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

// tempConversion(0) ➞ [32, 273.15]
// // 0°C tương đương với 32°F và 273.15 K.

// tempConversion(100) ➞ [212, 373.15]

// tempConversion(-10) ➞ [14, 263.15]

// tempConversion(300.4) ➞ [572.72, 573.55]


// ------------- CÁCH 2 ---------------------------//
function tempConversion(celsius) {
    let fahrenheit = parseFloat(((celsius * 9) / 5 + 32).toFixed(2));
    let kelvin = parseFloat((celsius + 273.15).toFixed(2));
  
    if (kelvin < 0) {
      return "Invalid";
    } else {
      return [fahrenheit, kelvin];
    }
}
  
  // Ví dụ
  console.log(tempConversion(0)); // ➞ [32.0, 273.15]
  console.log(tempConversion(100)); // ➞ [212.0, 373.15]
  console.log(tempConversion(-10)); // ➞ [14.0, 263.15]
  console.log(tempConversion(300.4)); // ➞ [572.72, 573.55]