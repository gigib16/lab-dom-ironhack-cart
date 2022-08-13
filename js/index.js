// ITERATION 1

function updateSubtotal(product) {

    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
  
    let subTotalValue = Number(price * quantity);
  
    const subTotal = product.querySelector('.subtotal span');
  
    subTotal.innerHTML = subTotalValue;
  
    return subTotalValue;
  
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2

  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach((singleProduct) => {total += updateSubtotal(singleProduct)});

  // ITERATION 3

  const product = document.querySelector('.product');
  
  const productParentNode = product.parentNode.children;
  
  const productLength= productParentNode.length;
  
  let total= 0; 
  
  for (let i=0; i< productLength; i++){
    updateSubtotal(productParentNode[i]);
    total += updateSubtotal(productParentNode[i]);
  }
  
  document.querySelector("#total-value span").innerHTML=total;
}


// ITERATION 4

function removeProduct(event) {
  
    const target = event.currentTarget;
  
    const parentTarget=target.parentNode;
  
    const parentTarget2=parentTarget.parentNode;
  
    parentTarget2.remove();
  
    calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
