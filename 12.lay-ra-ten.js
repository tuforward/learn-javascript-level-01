/**
 * CÂU HỎI: LẤY RA TÊN
 * 
 * YÊU CẦU:
    +   Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
*/

const myFriends = [1, 2, "Thiệu", "Martin", "Giang", "Trường", 5, 6];

function getFriends (arr) {
    let listFriends = [];

    for(let element of arr) {
        if(typeof element === "string") {
            listFriends.push(element);
        }
    }

    return listFriends;
}

let vidu_01 = getFriends(myFriends);

console.log(vidu_01);

