var cart;
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random(0,100);
  function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
    
  }
  var inYourCart= [];
  var i = 0;
  while (i < cart.length){
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    inYourCart.push(item + "at $" + price);
    i++}
    return ("In your cart, you have ${inYourCart.join}(", ")}."
    );
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
