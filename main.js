let amount = document.getElementById("amount")
let discountPer = document.getElementById("discountPer")
let disAmount = document.getElementById("disAmount")
let finalPayment = document.getElementById("finalPayment")

let Calculate = document.getElementById("Calculate")
let Reset = document.getElementById("Reset")



Calculate.addEventListener("click", ()=>{

    disAmount.value= amount.value*discountPer.value/100;
    finalPayment.value=amount.value-disAmount.value;
    
})

Reset.addEventListener("click", ()=>{
    window.location.reload()
})

