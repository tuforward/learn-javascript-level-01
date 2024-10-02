/**
 * CÂU HỎI: Conditional Ternary Operator - TOÁN TỬ 3 NGÔI
 * 
 * YÊU CẦU:
    +   Phỏng đoán kết quả của console.log(). Sau đó code lại bài toán.
 */
const fullName = "Giang Trường";
const gender = "Nam";
const age = 17;

const vocative = gender === "Nam" ? "Ông" : "Bà";

console.log(vocative);

console.log(`Xin chào ${gender === "Nam" ? "Ông" : "Bà"} ${fullName}`);

console.log(`Xin chào ${vocative} ${fullName}`);

const drinkAlcohol =
    age < 18
    ? "Bạn chưa được phép uống rượu."
    : age >= 18 && age <= 60
    ? "Bạn nên uống ít rượu."
    : age > 60
    ? "Bạn không nên uống rượu."
    : "Bạn ơi! Bạn còn đó chứ!";

console.log(drinkAlcohol);