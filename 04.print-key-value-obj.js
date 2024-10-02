/**
 * CÂU HỎI: IN RA KEY VALUE CỦA OBJECT ? 
 * 
 * YÊU CẦU:
    +   Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string.
 */

let person = {
    name: "Giang Truong",
    age: 20,
    height: 165,
    country: "Canada",
}

const print_01 = (obj) => {
    //  lưu ý chỉ in ra các cặp key-value có dạng string
    for(const key in obj) {
        if(typeof obj[key] === "string")
            console.log(key, ":", obj[key]);
    }
}

/**             LƯU Ý KHI DÙNG FOR IN
 *      +   Bởi vì key sẽ có dạng chuỗi
 *      +   Nên khi muốn truy cập vào key lấy value bằng dấu '.' sẽ bị lỗi
 *      +   Phải dùng như thế này:  obj[key];
 */

print_01(person);