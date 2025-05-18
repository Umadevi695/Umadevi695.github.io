const products=[
    {id:1, name:"p1", price:34, qty:5},
    {id:2, name:"p2", price:50, qty:3},
    {id:3, name:"p3", price:75, qty:2},
];

const cart={1:4, 3:5}
const total=products.reduce((sum,value) => {
    const qty=cart[value.id] ?? 0;
    return sum+value.price*qty;
},0);
console.log(total);