/**                        Tính Thể Tích của Hình Nón
 * YÊU CẦU:
    +   Viết một hàm nhận chiều cao và bán kính của một hình nón làm đối số và trả về thể tích của hình nón, làm tròn đến hai chữ số sau dấu thập phân.
*/

const PI = 3.14;

const dienTichHinhNon = (chieuCao, banKinh) => {
    // tính toán diện tích
    let dienTich =  (1 / 3) * Math.PI * (banKinh * banKinh) * chieuCao;

    dienTich = Math.round(dienTich * 100) / 100;

    return dienTich;
}

let vidu_01 = dienTichHinhNon(18, 0);
let vidu_02 = dienTichHinhNon(3,  2);
let vidu_03 = dienTichHinhNon(15, 6);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);