// Question #3
let userPassword = "ssswnalWadqQ";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength (userPassword) {
    if (userPassword > "aaaaaaaaaa") {
        return "Strong"
    } else if (userPassword >= "aaaaaa" && userPassword <= "aaaaaaaaaa") {
        return "Medium"
    } else if (userPassword < "aaaaaa") {
        return Weak
    }
}

console.log(checkPasswordStrength(userPassword));
