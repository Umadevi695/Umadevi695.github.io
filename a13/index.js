const products=[
    {id :1, name:"Product 1",price:34},
    {id :2, name:"Product 2",price:24},
    {id :3, name:"Product 3",price:44},
];

const newPrice=products.map((value) => ({ ...value,price:value.price+5}));
 

products.forEach((product)=> console.log(`name:${product.name}, Price:${product.price}`));

 

