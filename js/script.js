/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then(products => {
      const productList = document.getElementById("product-list");
    
      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col", "mb-5");

        productCard.innerHTML = `
                  <div class="card h-10 b-10">
                      <img class="card-img-top" src="${product.image}" alt="${product.title}"/>
                      <div class="card-body text-center"> 
                          <h5 class="card-title">${product.title}</h5>
                          <p class="card-text">${product.price} £</p>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center">
                          <button class="btn btn-outline-dark mt-auto btn-buy" type="button"> Köp</button>
                        
                          </div>
                      </div>
                  </div>
              `;

        productList.appendChild(productCard);
      });
      addEventlistner();
    })
    .catch((error) =>
      console.error("Fel vid hämtning av produkter:", error)
    ); // Fånga eventuella fel
}

function addEventlistner(){
  const buttons = document.querySelectorAll(".btn-buy");

  buttons.forEach(button => {
    button.addEventListener('click', function(){
      alert("klickad produkt" + button.closest('.card').querySelector('.card-title').textContent);
     
    });
  });
}

function openForm(){
  
}


getProducts();


  