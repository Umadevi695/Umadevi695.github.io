const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const showProducts = () => {
  const root = document.getElementById("root");

  

  products.map((value) => {
    root.innerHTML += `
      <div class="product">
        <p>${value.name}</p>
        <p>₹${value.price}</p>
        <button onclick="addToCart(${value.id})">Add to cart</button>
      </div>
    `;
  });
};

const addToCart = (id) => {
  alert("Product " + id + " added to cart!");
};

