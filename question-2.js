// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 },)
function countQuantity (inventory) {
let count = 0;
let appleCount = 0;
let orangeCount = 0;
let bananaCount = 0;
for (let i = 0;i < inventory.length;i++) {
  if (inventory[i].name === "Apple") {
    appleCount = (inventory[i].quantity + count) * inventory[i].price;
  } else if (inventory[i].name === "Banana") {
    bananaCount = (inventory[i].quantity + count) * inventory[i].price;
  } else if (inventory[i].name === "Orange") {
    orangeCount = (inventory[i].quantity + count) * inventory[i].price;
  }
}
return appleCount + bananaCount + orangeCount
}
console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก" + countQuantity(inventory) + "บาท");


