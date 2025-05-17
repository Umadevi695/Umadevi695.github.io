/*const products=[
    {id :1, name:"Product 1", price:34, qty:3, status:"pending"},
    {id :2, name:"Product 2", price:24, qty:2, status:"pending"},
    {id :3, name:"Product 3", price:44, qty:1, status:"pending"},
];

const newPrice=products.map((value) => ({ ...value, price:value.price+5, status:value.status="Completed", total:value.qty*value.price}));
console.log(newPrice);*/

function add(x, y) {
    return new Promise((resolve, reject) => {
        if (x < 5) {
            reject("x is less than 5");
        } else {
            resolve(x + y);
        }
    });
}

function sqr(a){
    return a*a
}
async function main() {
    try {
        let sum = await add(4, 5);
        let result = sqr(sum);
        console.log(result);
    } catch (error) {
        
        console.error(error);
    }
}
main()
 


