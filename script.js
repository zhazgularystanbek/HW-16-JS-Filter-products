const productsInner = document.querySelector(".products-inner");

fetch("nout.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach((item) => {
            
      let cards = document.createElement("div");
      cards.classList = `cards  ${item.category}`;

      let imgProduct = document.createElement("img");
      imgProduct.src = item.img;
      imgProduct.classList = "img-product";

      let hr = document.createElement("hr");
      hr.classList = "hr-card";

      let nameProduct = document.createElement("h3");
      nameProduct.textContent = item.title;
      nameProduct.classList = "product-name";

      let priceProduct = document.createElement("span");
      priceProduct.textContent = "Цена: " + item.price + " сом";
      priceProduct.classList = "price-product";

      let descProduct = document.createElement("p");
      descProduct.classList = "desc-product";
      descProduct.textContent = item.desc;


      productsInner.appendChild(cards);
      cards.appendChild(imgProduct);
      cards.appendChild(hr);
      cards.appendChild(nameProduct);
      cards.appendChild(priceProduct);
      cards.appendChild(descProduct);

      const filterProducts = document.querySelector(".products-filters");
      const filterCards = document.querySelectorAll(".cards");
      filterProducts.addEventListener("click", (event) => {
          if (event.target.tagName !== "BUTTON") return false;
          let filterCard = event.target.dataset["filter"];
          filterCards.forEach((item) => {
              item.classList.remove("hide");
              if(!item.classList.contains(filterCard) && filterCard !== "all") {
                  item.classList.add("hide");
              }
          });
      });
    });
})
.catch((error) => {
    console.log(error);
});