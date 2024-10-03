/**                        TRÚNG ĐỘC ĐẮC
 * YÊU CẦU:
    +   Viết một hàm nhận vào một mảng (kết quả của máy đánh bạc) và trả về true nếu tất cả các phần tử trong mảng đều giống nhau và false nếu ngược lại. Mảng sẽ chứa 4 phần tử.


    +   Các giá trị phải giống hệt nhau thì mới có giải độc đắc.
*/

function ngonn (arguments) {
    for(let index = 1 ; index < arguments.length ; index++) {
        if(arguments[index-1] != arguments[index]) return false;
    }
    return true;
}

let vidu_01 = ngonn(["@", "@", "@", "@"]);
let vidu_02 = ngonn(["abc", "abc", "abc", "abc"]);
let vidu_03 = ngonn(["SS", "SS", "SS", "SS"]);
let vidu_04 = ngonn(["&&", "&", "&&&", "&&&&"]);
let vidu_05 = ngonn(["SS", "SS", "SS", "Ss"]);


console.log("ví dụ 01",vidu_01);
console.log("ví dụ 02", vidu_02);
console.log("ví dụ 03", vidu_03);
console.log("ví dụ 04", vidu_04);
console.log("ví dụ 05", vidu_05);