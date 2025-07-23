// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

function findLowestQuantity (inventory) {
  let lowest = inventory[0].quantity;
  let lowestName = "";
  for (let i = 1; i < inventory.length;i++) {
    if (lowest > inventory[i].quantity) {
      lowest = inventory[i].quantity
      lowestName = inventory[i].name
    }
  }
  return "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " + lowestName + " ซึ่งมี " + lowest + " ชิ้น"
}

console.log(findLowestQuantity(inventory));

