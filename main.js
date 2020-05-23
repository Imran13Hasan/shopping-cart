//iPhone plus button...
document.getElementById("plus-btn-ph").addEventListener("click", function(){

    let amount = document.getElementById("amount-ph").value;
    let amountNum = parseFloat(amount);
    let increase = amountNum + 1;
    // console.log("increase", increase);
    document.getElementById("amount-ph").value = increase;

    let phonePrice = document.getElementById("price-ph").innerText;
    let phonePriceNum = parseFloat(phonePrice);

    let actualPrice = increase * 1219;
    // console.log(actualPrice);
    document.getElementById("price-ph").innerText = actualPrice;

    //subTotal...
    let subTotal = document.getElementById('subTotal').innerText;
    let subTotalNum = parseFloat(subTotal);
    let final = subTotalNum + 1219;
    document.getElementById("subTotal").innerText = final;

    //tax...
    let tax = document.getElementById("tax").innerText;
    let taxNum = parseFloat(tax);
    let taxPayable = Math.round(taxNum + (1219 * 0.15));
    document.getElementById('tax').innerText = taxPayable;

    //total...
    let total = document.getElementById('total').innerText;
    let totalNum = parseFloat(total);
    let grossTotal = final + taxPayable;
    document.getElementById("total").innerText = grossTotal;
})
//iphone minus button...
document.getElementById("minus-btn-ph").addEventListener("click", function(){

    let amount = document.getElementById("amount-ph").value;
    let amountNum = parseFloat(amount);
    if(amountNum > 0){
        let decrease = amountNum - 1;
        // console.log("decrease", decrease);
        document.getElementById("amount-ph").value = decrease;
    
    let phonePrice = document.getElementById("price-ph").innerText;
    let phonePriceNum = parseFloat(phonePrice);

    let actualPrice = decrease * 1219;
    // console.log(actualPrice);
    document.getElementById("price-ph").innerText = actualPrice;
    //subTotal...
    let subTotal = document.getElementById('subTotal').innerText;
    let subTotalNum = parseFloat(subTotal);
    let final = subTotalNum - 1219;
    document.getElementById("subTotal").innerText = final;
    //tax...
    let tax = document.getElementById("tax").innerText;
    let taxNum = parseFloat(tax);
    let taxPayable = Math.round(taxNum - (1219 * 0.15));
    document.getElementById('tax').innerText = taxPayable;

    //total...
    let total = document.getElementById('total').innerText;
    let totalNum = parseFloat(total);
    let grossTotal = final + taxPayable;
    document.getElementById("total").innerText = grossTotal;
}
    
})

//Case plus button...
document.getElementById("plus-btn-cs").addEventListener("click", function(){

    let amount = document.getElementById("amount-cs").value;
    let amountNum = parseFloat(amount);

    let increase = amountNum + 1;
    // console.log("increase", increase);
    document.getElementById("amount-cs").value = increase;

    let phonePrice = document.getElementById("price-cs").innerText;
    let phonePriceNum = parseFloat(phonePrice);

    let actualPrice = increase * 59;
    // console.log(actualPrice);
    document.getElementById("price-cs").innerText = actualPrice;
    //subTotal...
    let subTotal = document.getElementById('subTotal').innerText;
    let subTotalNum = parseFloat(subTotal);
    let final = subTotalNum + 59;
    document.getElementById("subTotal").innerText = final;
    //tax...
    let tax = document.getElementById("tax").innerText;
    let taxNum = parseFloat(tax);
    let taxPayable = Math.round(taxNum + (59 * 0.15));
    document.getElementById('tax').innerText = taxPayable;

    //total...
    let total = document.getElementById('total').innerText;
    let totalNum = parseFloat(total);
    let grossTotal = final + taxPayable;
    document.getElementById("total").innerText = grossTotal;
})

//case minus button...
document.getElementById("minus-btn-cs").addEventListener("click", function(){

    let amount = document.getElementById("amount-cs").value;
    let amountNum = parseFloat(amount);
    if(amountNum > 0){
        let decrease = amountNum - 1;
        // console.log("decrease", decrease);
        document.getElementById("amount-cs").value = decrease;
    
    let phonePrice = document.getElementById("price-cs").innerText;
    let phonePriceNum = parseFloat(phonePrice);

    let actualPrice = decrease * 59;
    // console.log(actualPrice);
    document.getElementById("price-cs").innerText = actualPrice;
    //subTotal...
    let subTotal = document.getElementById('subTotal').innerText;
    let subTotalNum = parseFloat(subTotal);
    let final = subTotalNum - 59;
    document.getElementById("subTotal").innerText = final;
    //tax...
    let tax = document.getElementById("tax").innerText;
    let taxNum = parseFloat(tax);
    let taxPayable = Math.round(taxNum - (59 * 0.15));
    document.getElementById('tax').innerText = taxPayable;

    //total...
    let total = document.getElementById('total').innerText;
    let totalNum = parseFloat(total);
    let grossTotal = final + taxPayable;
    document.getElementById("total").innerText = grossTotal;
}
    
})


// //tax...
// let tax = document.getElementById("tax").innerText;
// let taxNum = parseFloat(tax);
// let taxPayable = actualPrice * 0.15;
// let finalTax = Math.round(taxPayable);
// document.getElementById('tax').innerText = finalTax;

