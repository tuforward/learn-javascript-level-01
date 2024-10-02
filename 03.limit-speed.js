/**                        TỐC ĐỘ GIỚI HẠN
 * YÊU CẦU:
    +   Giả sử một người đi xe ô tô, có vận tốc là x (km/h). 
    
    +   Viết hàm kiểm tra đầu vào x:z

        -   Nếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"

        -   Nếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt

        -   Nếu đầu vào x có vận tốc trên 120km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"
*/

const tienPhatCoBan = 30000;

const isSpeed = (kmPerHour) => {
    // nếu vận tốc dưới 70km
    if(kmPerHour <= 70)  return "Vận Tốc An Toàn";

    // nếu vận tốc trên 120k
    if(kmPerHour >= 120) return "Bạn bị tước giấy phép lái xe";

    // trường hợp còn lại, cứ mỗi 5km/h thì bị phạt 30000đ
    
    // (1)  tính ra km/h dư = km/h - 70, với 70 là vận tốc ok
    let kmBiDu   = kmPerHour - 70; 
    let tienPhat = Math.floor((kmBiDu / 5)) * tienPhatCoBan;

    return  tienPhat;
}

let vidu_01 = isSpeed(40);
let vidu_02 = isSpeed(70);
let vidu_03 = isSpeed(75);
let vidu_04 = isSpeed(99);
let vidu_05 = isSpeed(120);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);