/**                        TÌM SỐ LỚN NHẤT    
 * YÊU CẦU:
    +   Tính toán các phép tính sau và phỏng đoán kết quả của console.log().
*/

/**         Declaration Function
 *   +  Có tham số arguments (khi truyền vào mảng nó sẽ nhận được)
 *   +  Có tính hoisting    => gọi trước khi ghi định nghĩa
 */ 

let vidu_01_01 = isMaxNumber_01([12, 9, 5]);

console.log(vidu_01_01); /**    in ra trước khi định nghĩa hàm  */

function isMaxNumber_01 (arguments) {
    let isAnswer = -1;

    for(let element of arguments) {
        if(isAnswer < element) {
            isAnswer = element;
        }
    }
    return isAnswer;
}

let vidu_01_02 = isMaxNumber_01([15, 2, 3]);   /**    in ra sau khi định nghĩa hàm  */

console.log(vidu_01_02);

console.log("------------------------------------------------------------------");

/**         Expression Function
 *   +  Có tham số arguments (khi truyền vào mảng nó sẽ nhận được)
 *   +  không tính hoisting    => không thể gọi trước khi ghi định nghĩa
*/ 

try {
    let vidu_02_01 = isMaxNumber_02([12, 9, 5]);
    console.log(vidu_02_01); /**    in ra trước khi định nghĩa hàm => lỗi  */
} 
catch (error) {
    console.log("Expression Function Không Có Tính Hoisting");   
}


const isMaxNumber_02 = function (arguments) {
    let isAnswer = -1;
    for(let element of arguments) {
        if(isAnswer < element) {
            isAnswer = element;
        }
    }
    return isAnswer;
}

let vidu_02_02 = isMaxNumber_02([12, 9, 5]);

console.log(vidu_02_02); /**    in ra trước khi định nghĩa hàm => lỗi  */

console.log("------------------------------------------------------------------");

/**         Arrow Function
 *   +  không tham số arguments (khi truyền vào mảng nó sẽ nhận được)
 *   +  không tính hoisting    => không thể gọi trước khi ghi định nghĩa
 *   +  khắc phục không dùng arguents thì dùng rest params, nhưng khi truyền theo kiểu rest params thì không nên để thêm []
*/ 

try {
    let vidu_03_01 = isMaxNumber_03(10, 9, 11);
    console.log(vidu_03_01); /**    in ra trước khi định nghĩa hàm => lỗi  */
} 
catch (error) {
    console.log("Arrow Function Không Có Tính Hoisting");   
}

let isMaxNumber_03  = (...restParams) => {
    let = isAnswer = -1;

    for(let element of restParams) {
        if(isAnswer < element) {
            isAnswer = element;
        }
    }
    return isAnswer;
}

let vidu_03_02 = isMaxNumber_03(10, 9, 11);
console.log(vidu_03_02); /**    in ra trước khi định nghĩa hàm => lỗi  */


console.log("------------------------------------------------------------------");

/**        SỬ DỤNG HÀM BUILT-IN CỦA MATH (HÀM TOÁN HỌC)
*/
let isMaxNumber_04 = (...restParams) => {
    let arr = [];

    for(let element of restParams) {
        arr.push(element);
    }

    let isAnswer = Math.max(...arr);
    return isAnswer;
}

console.log(isMaxNumber_04(1, 2, 3, 5));