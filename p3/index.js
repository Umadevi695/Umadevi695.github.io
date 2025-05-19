const customers = [
    {card: "1234567890", pin:"1234", name:"John", balance:0},
    {card: "1234567891", pin:"1235", name:"Cathy", balance:0},
    
];

const login = () => {
  const cardInput = document.getElementById("card").value.trim();
  const pinInput = document.getElementById("pin").value.trim();
  const errorMsg = document.getElementById("error");

  const customer = customers.find(
    (cust) => cust.card === cardInput && cust.pin === pinInput
  );

  if (customer) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";
    document.getElementById("welcomeMsg").innerText = `Welcome, ${customer.name}!`;
  } else {
    errorMsg.innerText = "Invalid card or PIN. Please try again.";
  }
};