// Question #3
let userPassword = "abcdefghijk";
// เริ่มเขียนโค้ดตรงนี้
let strongPassword = "aaaaaaaaaa";
let mediumPassword = "aaaaaa"
function checkPasswordStrength (userPassword) {
    if (userPassword.length > strongPassword.length) {
        return "Strong"
    } else if (userPassword.length >= mediumPassword.length && userPassword.length <= strongPassword.length) {
        return "Medium"
    } else if (userPassword.length < mediumPassword.length) {
        return "Weak"
    }
}

console.log(checkPasswordStrength(userPassword));
