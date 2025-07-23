// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice (products,promotionCode) {
  let sumPrice = 0;
  let clothePrice = 0;
  let jeanPrice = 0;
  let shirtPrice = 0;
 for (let prices of products) {
    sumPrice = prices.quantity * prices.price
    if (prices.name === "เสื้อยืด") {
      clothePrice = sumPrice
    } else if (prices.name === "กางเกงยีนส์") {
      jeanPrice = sumPrice
    } else if (prices.name === "เสื้อเชิ้ต") {
      shirtPrice = sumPrice
    }
 }
 let totalPrice = clothePrice + jeanPrice + shirtPrice
 if (promotionCode === "SALE20") {
    totalPrice = totalPrice - (totalPrice * 0.2)
    return `ลด 20% เหลือ ${totalPrice}บาท จากมูลค่ารวมของสินค้าในตะกร้า`
 } else if (promotionCode === "SALE50") {
    totalPrice = totalPrice - (totalPrice * 0.5)
    return `ลด 50% เหลือ ${totalPrice}บาท จากมูลค่ารวมของสินค้าในตะกร้า`
} 
    return totalPrice
}

console.log(calculateTotalPrice(products,promotionCode));

