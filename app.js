//Input Value Increment and Phone Price Updated:
// const phoneIncrement = document.getElementById("phone-increment");
// phoneIncrement.addEventListener("click", function () {
//   const phoneQuantity = document.getElementById("phone-quantity");
//   const phoneCount = parseInt(phoneQuantity.value);
//   const phones = phoneCount + 1;
//   phoneQuantity.value = phones;
//   const phonesPrice = phones * 1219;
//   document.getElementById("phone-price").innerText = "$" + phonesPrice;

//   productCartPhoneHandler(true);
// });

//Input value Decrement and Phone Price Updated:
// const phoneDecrement = document.getElementById("phone-decrement");
// phoneDecrement.addEventListener("click", function () {
//   const phoneQuantity = document.getElementById("phone-quantity");
//   const phoneCount = parseInt(phoneQuantity.value);
//   const phones = phoneCount - 1;
//   phoneQuantity.value = phones;
//   const phonesPrice = phones * 1219;
//   document.getElementById("phone-price").innerText = "$" + phonesPrice;

//   productCartPhoneHandler(false);
// });

//Input value Increment and Case Price Updated:
// const caseIncrement = document.getElementById("case-increment");
// caseIncrement.addEventListener("click", function () {
//   const caseQuantity = document.getElementById("case-quantity");
//   const caseCount = parseInt(caseQuantity.value);
//   const cases = caseCount + 1;
//   caseQuantity.value = cases;
//   const casesPrice = cases * 59;
//   document.getElementById("case-price").innerText = "$"+ casesPrice;

//   productCartCaseHandler(true);
// });

//Input value Decrement and Case Price Updated:
// const caseDecrement = document.getElementById("case-decrement");
// caseDecrement.addEventListener("click", function () {
//   const caseQuantity = document.getElementById("case-quantity");
//   const caseCount = parseInt(caseQuantity.value);
//   const cases = caseCount - 1;
//   caseQuantity.value = cases;
//   const casesPrice = cases * 59;
//   document.getElementById("case-price").innerText = "$"+ casesPrice;

//   productCartCaseHandler(false);
// });

//Common Function for increment,decrement and price update for phone:
// function productCartPhoneHandler(isIncrease) {
//   const phoneQuantity = document.getElementById("phone-quantity");
//   const phoneCount = parseInt(phoneQuantity.value);
//   let phones = phoneCount;
//   if (isIncrease === true) {
//     phones = phoneCount + 1;
//   }
//   if (isIncrease === false && phones > 0) {
//     phones = phoneCount - 1;
//   }
//   phoneQuantity.value = phones;
//   const phonesPrice = phones * 1219;
//   document.getElementById("phone-price").innerText = "$" + phonesPrice;
// }

//Common Function for increment,decrement and price update for case:
// function productCartCaseHandler(isIncrease) {
//   const caseQuantity = document.getElementById("case-quantity");
//   const caseCount = parseInt(caseQuantity.value);
//   let cases = caseCount;
//   if (isIncrease === true) {
//     cases = caseCount + 1;
//   }
//   if (isIncrease === false && cases > 0) {
//     cases = caseCount - 1;
//   }
//   caseQuantity.value = cases;
//   const casesPrice = cases * 59;
//   document.getElementById("case-price").innerText = "$" + casesPrice;
// }


//Create an function for common codes and using it in html file by onclick keyword:
function productCartHandler(isIncrease, product) {
  const productQuantity = document.getElementById(product+"-quantity");
  const productCount = getInputNumber(product);
  let products = productCount;
  if (isIncrease === true) {
    products = productCount + 1;
  }
  if (isIncrease === false && products > 0) {
    products = productCount - 1;
  }
  productQuantity.value = products;
  let totalProductsPrice = 0;
  if (product === "phone") {
    totalProductsPrice = products * 1219;
  }
  if (product === "case") {
    totalProductsPrice = products * 59;
  }
  document.getElementById(product+"-price").innerText = "$"+ totalProductsPrice;

  calculateTotalPrice();
}

//Calculate Total Price:
function calculateTotalPrice() {
  const phoneAmount = getInputNumber("phone");
  const caseAmount = getInputNumber("case");
  const subTotalPrice = phoneAmount * 1219 + caseAmount * 59;
  document.getElementById("subtotal").innerText = "$"+ subTotalPrice;
  const taxPrice = Math.round(subTotalPrice * 0.1);
  document.getElementById("tax").innerText = "$"+ taxPrice;
  const grandTotal = subTotalPrice + taxPrice;
  document.getElementById("grandTotal").innerText = "$"+ grandTotal;
}
function getInputNumber(product) {
  const productInput = document.getElementById(product+"-quantity");
  const productAmount = parseInt(productInput.value);
  return productAmount;
}