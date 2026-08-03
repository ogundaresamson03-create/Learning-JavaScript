// .checked = property that detrmins the actual state of an 
//           HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const verveBtn = document.getElementById("verveBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if (myCheckBox.checked){
        subResult.textContent = `You are Subscribed`;
    }
    else {
        subResult.textContent = `You are not Subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are Paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are Paying with Master Card`;
    }
     else if(verveBtn.checked){
        paymentResult.textContent = `You are Paying with Verve`;
    }
    else{
        paymentResult.textContent = `Select Payment Method`;
    }

}