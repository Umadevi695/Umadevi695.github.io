let veggies=["Tomato","potato","beans","carrot"];



 function vegSearch(){
    let input=document.getElementById("veg").value.toLowerCase();
    
    let filtered=veggies.filter((value)=>value.toLowerCase()=== input);
    if(filtered.length>0){
        document.getElementById("output").innerText=`Found: ${filtered[0]}`;
    }
    else{
        document.getElementById("output").innerText=` Not Found!`;
    }
 }