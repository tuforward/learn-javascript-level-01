/**
 * CÂU HỎI: CỬA HÀNG TIỆN LỢI
 * 
 * YÊU CẦU:
    +   Cho một số tiền cần thanh toán và một mảng đại diện cho số tiền lẻ trong túi của bạn, xác định xem bạn có đủ tiền thanh toán cho đơn hàng không.

    + Viết một hàm changeEnough chuyền vào 2 đối số:

        - Đối số thứ nhất: Là 1 mảng các loại tiền có trong túi bạn theo thứ tự: quarter, dime, nickel, penny.

        - Đối số thứ hai: Tổng tiền mà khách hàng phải thanh toán.
    
    +   GHI CHÚ
        - quarter: 25 cents / $0.25
        - dime: 10 cents / $0.10
        - nickel: 5 cents / $0.05
        - penny: 1 cent / $0.01
*/

function changeEnough(change, amountDue) {
    // Tính tổng số tiền lẻ có trong túi
    let totalChange = change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01;
    
    // Kiểm tra xem tổng số tiền lẻ có đủ để thanh toán không
    return totalChange >= amountDue;
  }
  
  // Kiểm tra các trường hợp
  console.log(changeEnough([2, 100, 0, 0], 14.11));   // Kết quả: false
  console.log(changeEnough([0, 0, 20, 5], 0.75));     // Kết quả: true
  console.log(changeEnough([30, 40, 20, 5], 12.55));  // Kết quả: true
  console.log(changeEnough([10, 0, 0, 50], 3.85));    // Kết quả: false
  console.log(changeEnough([1, 0, 5, 219], 19.99));   // Kết quả: false