/**                        TRỌNG LƯỢNG CỦA HÌNH TRỤ
 * YÊU CẦU:
    +   Cho bán kính r và chiều cao h (tính bằng cm), tính khối lượng của một hình trụ khi nó được bơm đầy nước.

    +   Kết quả in ra dạng kilogam (kg) và được làm tròn đến hai chữ số sau dấu thập phân.

    - Cách giải quyết:
        - Tính thể tích của hình trụ
        - Chuyển đổi cm³ thành dm³
        - 1 dm³ = 1 lít, 1 lít tương đương với 1 kg
*/

function theTichHinhTru(banKinh, chieuCao) {
    return Math.PI * (banKinh * banKinh) * chieuCao; // cm3
}

const cm3Todm3 = function (theTich) {
    return theTich / 1000; // dm3
}

const khoiLuongHinhTru = (banKinh, chieuCao) => {
    // thể tích hình trụ
    let v = theTichHinhTru(banKinh, chieuCao);

    // chuyển từ cm3 sang dm3
    let dm3 = cm3Todm3(v); 

    return Number(dm3.toFixed(2));
}

let vidu_01 = khoiLuongHinhTru(4, 10);
let vidu_02 = khoiLuongHinhTru(30, 60);
let vidu_03 = khoiLuongHinhTru(15, 10);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);