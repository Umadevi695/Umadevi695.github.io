const products = [
  {
    id: 1,
    name: "Dress",
    price: 34,
    image: "../images/pexels-anne-363161-985635.jpg",
  },
  {
    id: 2,
    name: "Shoes",
    price: 50,
    image: "../images/pexels-mnzoutfits-1598508.jpg",
  },
  {
    id: 3,
    name: "Watch",
    price: 75,
    image: "../images/pexels-ferarcosn-190819.jpg",
  },
];

const cart = {};

const addToCart = (id) => {
  //cart[id] = 1;
  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }
};

const increment = (id) => {
  cart[id] = cart[id] + 1;

  dispCart();
};

const decrement = (id) => {
  cart[id] = cart[id] - 1;

  dispCart();
};

const dispCart = () => {
  let str = "<h2>Cart</h2>";
  products.map((value) => {
    cart[value.id] &&
      (str += `<div>
      ${value.name}
      -${value.price}
      -<button onclick='decrement(${value.id})'>-</button>
      ${cart[value.id]}
      <button onclick='increment(${value.id})'>+</button>
      -${value.price * cart[value.id]}
     </div>
    `);
  });
  str += `<h4 id='orderValue'></h4>`;
  root.innerHTML = str;
  dispOrderValue();
};

const dispOrderValue = () => {
  const grandTotal = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
  }, 0);
  orderValue.innerHTML = `Order Value: ${grandTotal}`;
};

const showProducts = () => {
  let str = "";
  products.map((value) => {
    str += `<div>
      <img src="${value.image}" alt="${value.name}" style="width:100%; height:150px; object-fit:cover; border-radius:10px;">
      <h3>${value.name}</h3>
      <h4>₹${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
    </div>`;
  });
  root.innerHTML = "<div class='row'>" + str + "</div>";
};
