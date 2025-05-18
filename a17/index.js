function add(...values){
    const totalSum = values.reduce((sum, value) => sum + value);
    console.log(totalSum);
}
add(5,6,7,8,9,5)
