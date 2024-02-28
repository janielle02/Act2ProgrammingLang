const cart = [
    { productName: "T-shirt", price: 100},
    { productName: "Jeans", price: 50},
    { productName: "Sneakers", price: 80},
    { productName: "Mask", price: 40},
    { productName: "Dress", price: 90},
    { productName: "Swim Suit", price: 100},
];
const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for(let product of cart){ 
         totalPrice += product.price

     }
         return totalPrice;

}
    const totalPrice = calculateTotalPrice(cart);
    console.log("The total price is: " + totalPrice);
    
    