/**
 * CÂU HỎI: Sam có ở cùng Frodo không?
 * 
 * YÊU CẦU:
    -   Sam và Frodo cần phải ở gần nhau. Nếu họ đứng cạnh nhau trong mảng, hàm của bạn sẽ trả về true. Nếu có một tên nằm giữa họ, trả về false.

    -   Chỉ có một Sam và một Frodo trong mảng.
*/


const pairFriend = (arr) => {
    if(arr.length == 0 || arr.length == 1) return false; // mảng có 0 mà có 1 phần tử thì làm sao mà 2 đứa kia đứng chung được

    if(arr.length === 2) {
        if(arr[0] === "Frodo" && arr[1] === "Sam" || arr[0] === "Sam" && arr[1] === "Frodo")
            return true;

        else return false;
    } 

    for(let index = 1 ; index < arr.length - 1 ; index++) {
        if(arr[index-1] === "Frodo" && arr[index] === "Sam" || arr[index-1] === "Sam" && arr[index] === "Frodo") 
            return true;
    }
    return false;
} 

let vidu_01 = pairFriend(["Frodo", "Sam", "Gandalf"]);
let vidu_02 = pairFriend(["Frodo", "Saruman", "Sam"]);
let vidu_03 = pairFriend(["Orc", "Sam", "Frodo", "Legolas"]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

/**
 *  middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

    middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

    middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true
 */