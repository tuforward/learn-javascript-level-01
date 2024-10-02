/**
 * CÂU HỎI: 24-Hour Time
 * 
 * YÊU CẦU:
    +   Viết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
 */

//   -----------------CÁCH CỦA TÔI-----------------------------//
const convertTime = (time) => {
    // đầu tiên là lấy mốc của giờ hiện tjai
    let mocThoiGian = time.slice(8, 9);
    
    // lấy giờ ra
    let gio = parseInt(time.slice(0, 2));
    
    // nếu là 12h AM thì convert về 0h
    if(gio === 12 && mocThoiGian === "A") {
        gio = 0;
    }
    
    // nếu các giờ khác mà mốc là PM thì phải ...
    else if(gio !== 12 && mocThoiGian === "P" ){
        gio = gio + 12;
    }

    // convert 
    let str = "" + gio;
    for(let index = 2 ; index < 8 ; index++) {
        str += time[index];
    }
    
    return str; // đáp án
}

let vidu_01 = convertTime("07:05:45PM");

let vidu_02 = convertTime("12:40:22AM");

let vidu_03 = convertTime("12:45:54PM");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("-----------------------------------------------------------------");
//   -----------------CÁCH 2-----------------------------//

const convertTime_Cach_2 = (chuoiThoiGian) => {
    // lấy 1 chuỗi thời gian nhưng loại bỏ AM/PM
    let time = chuoiThoiGian.slice(0, -2);

    // lấy chuỗi AM/PM
    let apm  = chuoiThoiGian.slice(-2);

    // tách chuỗi thời gian ra thành từng mảng con
    let units = time.split(":"); // tách mảng con theo kí tự ":"

    let hours = units[0];
    const minutes = units[1];
    const seconds = units[2];

    if(hours === "12") {
        hours = "00";
    }

    if(apm === "PM") {
        hours = parseInt(hours) + 12;
    }

    // ghép mảng thành chuỗi
    let str = [hours, minutes, seconds].join(":");
    return str;
}

let vidu_04 = convertTime_Cach_2("07:05:45PM");

let vidu_05 = convertTime_Cach_2("12:40:22AM");

let vidu_06 = convertTime_Cach_2("12:45:54PM");

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);