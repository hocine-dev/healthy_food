/* add products function */
function add_products() {
  let mydiv = document.createElement("div");
  mydiv.innerHTML = `    <div class="row py-5">

  <div class="col-lg-3">
      <div class="card border-0 ">
          <div class="card-body">
              <img src="images/lemon.jpg" class="img-fluid" alt="lemon">
              <h6>natural lemon</h6>
              <p>2.99$</p>
              <button class="btn-sm add">add to cart</button>
          </div>
      </div>
  </div>
  <div class="col-lg-3">
      <div class="card border-0 ">
          <div class="card-body">
              <img src="images/manngo.jpg" class="img-fluid" alt="manngo">
              <h6>fresh mango</h6>
              <p>3.99$</p>
              <button class="btn-sm add">add to cart</button>
          </div>
      </div>
  </div>
  <div class="col-lg-3">
      <div class="card border-0 ">
          <div class="card-body">
              <img src="images/strawnb.jpg" class="img-fluid" alt="strawnb">
              <h6>delicious strawberry</h6>
              <p>4.49$</p>
              <button class="btn-sm add">add to cart</button>
          </div>
      </div>
  </div>
  <div class="col-lg-3">
      <div class="card border-0 ">
          <div class="card-body">
              <img src="images/garlic.jpg" class="img-fluid" alt="garlic">
              <h6>natural garlic</h6>
              <p>6.99$</p>
              <button class="btn-sm add">add to cart</button>
          </div>
      </div>
  </div>

</div>`;
  document.getElementById("product_container").appendChild(mydiv);
  window.scrollBy(0, 400);
}

/* back to top bottom function */
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


