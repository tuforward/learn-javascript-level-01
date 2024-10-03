/**                        Instant JAZZ
 * YÊU CẦU:
    +   Tạo một hàm để ghép số 7 vào cuối mỗi hợp âm trong một mảng. Bỏ qua tất cả các hợp âm đã kết thúc bằng 7.

    +   Trả về một mảng rỗng nếu mảng cho trước là rỗng.
*/

const jazzify = function (arguments) {
    if(arguments.length === 0) return [];

    for(let index = 0 ; index < arguments.length ; index++) {
        let sz = arguments[index].length - 1;
        if(arguments[index][sz] !== "7"){
            console.log(arguments[index][sz]);
            arguments[index] += "7";
        }
    }
    return arguments;
}

let vidu_01 = jazzify(["G", "F", "C"]);
let vidu_02 = jazzify(["Dm", "G", "E", "A"]);
let vidu_03 = jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]);
let vidu_04 = jazzify([]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);