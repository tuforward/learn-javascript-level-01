// 1.2. Các loại hàm (các cách viết hàm)
// Declaration function (Hàm định nghĩa)
  // Có đối tượng arguments.
  // Có tính hoisting (nghĩa là gọi được hàm trước lúc khai báo hàm đó).
  
  // var result = sum(10, 20, 30, 40, 50, 60, 70, 80);
  // console.log(result);
  
  // function sum() {
  //   let total = 0;
  //   for (const number of arguments) {
  //     total += number;
  //   }
  //   return total;
  // }

  




// Expression function (Hàm biểu thức)
  // Có đối tượng arguments.
  // Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi).

  // var result = sum(10, 20, 30, 40, 50, 60, 70, 80);
  // console.log(result);
  
  // var sum = function() {
  //   let total = 0;
  //   for (const number of arguments) {
  //     total += number;
  //   }
  //   return total;
  // }




// Arrow function (Hàm mũi tên)
  // Không có đối tượng arguments.
  // Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi).

  // var result = sum(10, 20, 30, 40, 50, 60, 70, 80);
  // console.log(result);
  
  // var sum = (...numbers) => {
  //   let total = 0;
  //   for (const number of numbers) {
  //     total += number;
  //   }
  //   return total;
  // }




  // So sánh 3 cách viết
  // function sum(a, b) {
  //   return a + b;
  // }

  // var sum = function (a, b) {
  //   return a + b;
  // }

  // var sum = (a, b) => a + b;



  // function hello(fullName) {
  //   return `Xin chào ${fullName}!`;
  // }

  // var hello = function (fullName) {
  //   return `Xin chào ${fullName}!`;
  // }

  // var hello = fullName => `Xin chào ${fullName}!`;






// 1.3. Ví dụ về hàm
// Ví dụ 1: Tính tổng các số chẵn như sau: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// const tinhTongSoChan = (...numbers) => {
//   let total = 0;

//   for (const number of numbers) {
//     if(number %2 == 0) {
//       total += number;
//     }
//   }

//   return total;
// }

// const result = tinhTongSoChan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);



// Ví dụ 2: Viết chương trình cho người dùng nhập vào số n lớn hơn 0, sau đó dựa vào n tính giá trị của biểu thức:
// bieuThuc = 1/n + 2/n + 3/n + ... + n/n

// const bieuThuc = (n) => {
//   let total = 0;
  
//   for(let i = 1; i <= n; i++) {
//     total += i/n;
//   }

//   return total;
// }

// let n = prompt("Nhập n:");
// n = parseInt(n);
// if(n > 0) {
//   const result = bieuThuc(n);
//   console.log(result);
// }






// 02. Try Catch
// // Công việc 1
// try {
//   // var a = 10;
//   console.log("a", a);
// } catch (error) {
//   console.error(error);
// }

// // Công việc 2
// var b = 20;
// console.log("b", b);






// 3.1. Cách thêm 1 key mới vào object
// var infoUser = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com"
// };

// // infoUser.phone = "0123456789";
// infoUser["phone"] = "0123456789";

// console.log(infoUser);






// 3.2. Cách xóa 1 key khỏi object
// var infoUser = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   password: "123456",
//   confirmPassword: "123456"
// }

// if(infoUser.password == infoUser.confirmPassword) {
//   delete infoUser.confirmPassword;
//   // Viết logic gửi dữ liệu bên backend
//   console.log(infoUser);
// } else {
//   alert("Mật khẩu không trùng khớp");
// }







// 4.1. forEach()
// const listUser = [
//   {
//     fullName: "Le Van A",
//     email: "levana@gmail.com"
//   },
//   {
//     fullName: "Le Van B",
//     email: "levanb@gmail.com"
//   },
//   {
//     fullName: "Le Van C",
//     email: "levanc@gmail.com"
//   }
// ];

// Ví dụ 1: dùng for thông thường
// for(var i = 0; i < listUser.length; i++) {
//   listUser[i].fullName = listUser[i].fullName.toUpperCase();
//   console.log(`${i + 1}. ${listUser[i].fullName} - ${listUser[i].email}`);
// }

// Ví dụ 2: dùng for of
// for (const user of listUser) {
//   user.fullName = user.fullName.toUpperCase();
//   console.log(`${user.fullName} - ${user.email}`);
// }

// Ví dụ 3: dùng forEach
// listUser.forEach((user, i) => {
//   user.fullName = user.fullName.toUpperCase();
//   console.log(`${i + 1}. ${listUser[i].fullName} - ${listUser[i].email}`);
// })





// Ví dụ 4: forEach
// const monHoc = [
// 	{
//     ten: "Toán",
//     diem: 8.6
//   },
//   {
//     ten: "Lý",
//     diem: 9.2
//   },
//   {
//     ten: "Hóa",
//     diem: 8.5
//   },
//   {
//     ten: "Tin",
//     diem: 7.8
//   },
// ]

// // Công việc 1: Trả ra mảng có 2 trường: tên và học lực
// monHoc.forEach((item) => {
//   let hocLuc = "";

//   if(item.diem >= 9) {
//     hocLuc = "Xuất sắc";
//   } else if(item.diem < 9 && item.diem >= 8) {
//     hocLuc = "Giỏi";
//   } else if(item.diem < 8 && item.diem >= 6.5) {
//     hocLuc = "Khá";
//   } else {
//     hocLuc = "Trung bình";
//   }

//   item.hocLuc = hocLuc;

//   delete item.diem;
// })

// console.log(monHoc);

// // Công việc 2: Tính điểm trung bình của 4 môn (không tính được, vì trường điểm đã bị xóa)










// 4.6. map()
// const monHoc = [
// 	{
//     ten: "Toán",
//     diem: 8.6
//   },
//   {
//     ten: "Lý",
//     diem: 9.2
//   },
//   {
//     ten: "Hóa",
//     diem: 8.5
//   },
//   {
//     ten: "Tin",
//     diem: 7.8
//   },
// ]

// // Công việc 1: Trả ra mảng có 2 trường: tên và học lực
// const monHocMoi = monHoc.map((item) => {
//   let hocLuc = "";

//   if(item.diem >= 9) {
//     hocLuc = "Xuất sắc";
//   } else if(item.diem < 9 && item.diem >= 8) {
//     hocLuc = "Giỏi";
//   } else if(item.diem < 8 && item.diem >= 6.5) {
//     hocLuc = "Khá";
//   } else {
//     hocLuc = "Trung bình";
//   }

//   return {
//     ten: item.ten,
//     hocLuc: hocLuc
//   };
// })

// console.log(monHoc);
// console.log(monHocMoi);

// // Công việc 2: Tính điểm trung bình của 4 môn (không tính được, vì trường điểm đã bị xóa)
// let diemTrungBinh = 0;

// monHoc.forEach(item => {
//   diemTrungBinh += item.diem/monHoc.length;
// })

// console.log(diemTrungBinh);









// 4.2. every()
// const monHoc = [
// 	{
//     ten: "Toán",
//     diem: 8.6
//   },
//   {
//     ten: "Lý",
//     diem: 9.2
//   },
//   {
//     ten: "Hóa",
//     diem: 7.5
//   },
//   {
//     ten: "Tin",
//     diem: 8.8
//   },
// ]


// Dùng for thông thường
// let hocSinhGioi = true;

// for(let i = 0; i < monHoc.length; i++) {
//   if(monHoc[i].diem < 8) {
//     hocSinhGioi = false;
//     break;
//   }
// }


// Dùng every()
// const hocSinhGioi = monHoc.every((item) => {
//   return item.diem >= 8;
// })

// Dùng every() viết tắt
// const hocSinhGioi = monHoc.every(item => item.diem >= 8)

// if(hocSinhGioi) {
//   console.log("Đây là học sinh giỏi");
// } else {
//   console.log("Đây không là học sinh giỏi");
// }







// 4.3. some()
// const monHoc = [
// 	{
//     ten: "Toán",
//     diem: 8.6
//   },
//   {
//     ten: "Lý",
//     diem: 9.2
//   },
//   {
//     ten: "Hóa",
//     diem: 3.5
//   },
//   {
//     ten: "Tin",
//     diem: 8.8
//   },
// ]

// // let oLaiLop = false;
// // for(let i = 0; i < monHoc.length; i++) {
// //   if(monHoc[i].diem < 4) {
// //     oLaiLop = true;
// //     break;
// //   }
// // }


// const oLaiLop = monHoc.some(item => item.diem < 4);


// console.log(oLaiLop);







// 4.4. find()
// const monHoc = [
// 	{
//     ten: "Toán",
//     diem: 8.6
//   },
//   {
//     ten: "Lý",
//     diem: 9.2
//   },
//   {
//     ten: "Hóa",
//     diem: 3.5
//   },
//   {
//     ten: "Tin",
//     diem: 8.8
//   },
// ]


// const monLy = monHoc.find(item => item.ten == "Lý");
// console.log(monLy);






// 4.5. filter()
// const listUser = [
// 	{
//     fullName: "Le Van A",
//     email: "levana123@gmail.com"
//   },
//   {
//     fullName: "Le Van B",
//     email: "levanb222@gmail.com"
//   },
//   {
//     fullName: "Le Van C",
//     email: "levanc333@gmail.com"
//   },
//   {
//     fullName: "Le Van A",
//     email: "levana666@gmail.com"
//   },
// ]


// // Ví dụ hàm filter để lấy ra tất cả ông A
// // const listUserA = listUser.filter(item => item.fullName == "Le Van A");
// // console.log(listUserA);



// const existUserA = listUser.find(item => item.email == "levana123@gmail.com");
// console.log(existUserA);








// 4.7. reduce()
// const numbers = [3, 6, 8, 12, 15];

// Không truyền giá trị khởi tạo ban đầu
// const total = numbers.reduce((sum, item) => {
//   console.log(sum);
//   console.log(item);
//   console.log("-----------");
//   return sum + item;
// });

// const total = numbers.reduce((sum, item) => sum + item);


// Có truyền giá trị khởi tạo ban đầu
// const total = numbers.reduce((sum, item) => {
//   console.log(sum);
//   console.log(item);
//   console.log("-----------");
//   return sum + item;
// }, 0);

// console.log(total);








const monHoc = [
	{
    ten: "Toán",
    diem: 8.6
  },
  {
    ten: "Lý",
    diem: 9.2
  },
  {
    ten: "Hóa",
    diem: 3.5
  },
  {
    ten: "Tin",
    diem: 8.8
  },
]

const tongDiem = monHoc.reduce((sum, item) => {
  console.log(sum);
  console.log(item);
  console.log("-------------");
  return sum + item.diem;
}, 0);

console.log(tongDiem);