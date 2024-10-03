/**
 * CÂU HỎI: Viết hoa tên của bạn
 * 
 * YÊU CẦU:
    +   Tạo một hàm nhận vào một mảng các tên và trả về một mảng trong đó chỉ có chữ cái đầu tiên của mỗi tên được viết hoa.
*/

//   -------------- CÁCH CỦA GIANG ----------------------------------//
function chuanHoaTen (arr) {
    let arr_str = [];
    for(let element of arr) {
        let chuoi_ve_mo = element.toLowerCase(); // đưa toàn chuỗi về mo

        let first_letter = chuoi_ve_mo.charAt(0).toUpperCase();
        
        let temp = chuoi_ve_mo.split(""); // rã chuỗi
        
        temp.shift(); // Bỏ kí tự đầu

        temp.unshift(first_letter); // Thêm kí tự viết hoa đầu tiên dô

        let str = temp.join(""); // hợp nhất mảng thành chuỗi

        arr_str.push(str);

    }

    return arr_str;
}

let vidu_01 = chuanHoaTen(["mavis", "senaida", "letty"]);
let vidu_02 = chuanHoaTen(["samuel", "MABELLE", "letitia", "meridith"]);
let vidu_03 = chuanHoaTen(["Slyvia", "Kristal", "Sharilyn", "Calista"]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);


console.log("----------------------------------------------------------");

//   -------------- CÁCH CHUẨN LUN ----------------------------------//

const chuanHoaTen_02 = function (arr) {
    let arr_answer = []; // Mảng kết quả

    for(let name of arr) {
        let first_letter = name[0].toUpperCase(); // viết hoa chữ cái đầu

        // viết thường những chữ cái phía sau chữ cái đầu

        // cắt từ vị trí 1 sau đó viết thường
        let subName_lower = name.slice(1).toLowerCase();

        name = first_letter + subName_lower; // nối chuỗi

        arr_answer.push(name);
    }

    return arr_answer;
} 

let vidu_04 = chuanHoaTen_02(["mavis", "senaida", "letty"]);
let vidu_05 = chuanHoaTen_02(["samuel", "MABELLE", "letitia", "meridith"]);
let vidu_06 = chuanHoaTen_02(["Slyvia", "Kristal", "Sharilyn", "Calista"]);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);