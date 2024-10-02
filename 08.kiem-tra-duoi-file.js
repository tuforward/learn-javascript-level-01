/**
 * CÂU HỎI: KIỂM TRA ĐUÔI FILE
 * 
 * YÊU CẦU:
    +   Viết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.
 */


/** -----------------------------CÁCH 1----------------------------- */
const duoiFile_01 =  function (file) {
    // lấy chỉ số của dấu '.' nhưng hàm này sẽ trả về chỉ số đầu tiên nó gặp
    let indexOfDot = file.indexOf(".", 0);

    if(indexOfDot === -1) return "Đây không phải file";

    // lấy đuôi file
    let tailFile   = file.slice(indexOfDot + 1);

    return tailFile;
}

let vidu_01 = duoiFile_01("index.html");
let vidu_02 = duoiFile_01("dashboard.controller.js");

console.log(vidu_01);
console.log(vidu_02);

console.log("-------------------------------------------------------------------");


/** -----------------------------CÁCH 2----------------------------- */
function duoiFile_02 (file) {
    // lấy chỉ số của dấu '.' nhưng hàm này sẽ lẩy chỉ số cuối cùng
    let indexOfDot = file.lastIndexOf('.');

    if(indexOfDot === -1) return "Đây không phải file";

    // lấy đuôi file gốc
    let tailFile   = file.slice(indexOfDot + 1);

    return tailFile;
}

let vidu_03 = duoiFile_02("style.css");
let vidu_04 = duoiFile_02("dashboard.controller.js");

console.log(vidu_03);
console.log(vidu_04);

console.log("-------------------------------------------------------------------");


/** -----------------------------CÁCH 3----------------------------- */
const duoiFile_03 = file => {
    if(file.includes(".")) {
        return file.split(".").pop();
    }
    return "Đây không phải file";
}

// Lưu Ý Phương Pháp Pop Sẽ Xóa Phần Tử Cuối Mảng Nhưng Sẽ Trả Về Phần Tử Đó
