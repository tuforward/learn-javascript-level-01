/**
 * CÂU HỎI: Matchstick Houses (Nhà diêm)
 * 
 * YÊU CẦU:
    - Thách thức này sẽ giúp bạn hiểu và giải thích mối quan hệ toán học cả ở mặt đại số và hình học.
    
   Tạo một hàm nhận vào một số n (số ngôi nhà) và trả về số lượng que diêm cần thiết để xây lên n ngôi nhà đó. Xem ngôi nhà 1, 2 và 3 trong hình ảnh ở trên.

   - Ghi chú:
        - Nếu n = 0 trả về 0 que diêm.
        - Đầu vào n sẽ luôn là một số nguyên không âm.
*/

function matchstick_house  (soLuongNha) {
    if(soLuongNha === 0) return 0;

    let ans = (6 * soLuongNha) - (soLuongNha - 1);
    return ans;
}


let vidu_01 = matchstick_house(1);
let vidu_02 = matchstick_house(0);
let vidu_03 = matchstick_house(4);
let vidu_04 = matchstick_house(87);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

/**
 *  matchHouses(1) ➞ 6

    matchHouses(4) ➞ 21

    matchHouses(87) ➞ 436
 */