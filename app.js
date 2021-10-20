var inputInitialPrice = document.querySelector("#input-purchase-price");
var inputQty = document.querySelector("#input-stock-qty");
var inputCurrPrice = document.querySelector("#input-current-price");
var btn = document.querySelector("#btn");
var msg = document.querySelector("#msg");

function calProfit(){
    var profit = inputQty.value*(inputCurrPrice.value - inputInitialPrice.value);
    //console.log(profit);
   // msg.innerText = profit;
   return profit;
}

function calLoss(){
    var loss = inputQty.value*(inputInitialPrice.value - inputCurrPrice.value);
    return loss;
}

function calProfitPercent(){
    var getProfit = calProfit();
    var profitPercent = 100*(getProfit/inputInitialPrice.value);
    //msg.innerText = profitPercent;
    return [getProfit,profitPercent];
}

function calLossPercent(){
    var getLoss = calLoss();
    var lossPercent = 100*(getLoss/inputInitialPrice.value);
    //msg.innerText = lossPercent;
    return [getLoss,lossPercent];

}

function calculateProfitAndLoss(){
    if(inputInitialPrice.value>inputCurrPrice.value){
            const [getProfit,profitPercent] = calProfitPercent();
            msg.innerText = "HUrray! You made a profit of INR "+getProfit+" and profit percent is "+profitPercent;

    }
    else if(inputCurrPrice.value === inputInitialPrice.value){
        msg.innerText = "No Profit NO lOSSS !!!!"
    }
    else{
        const [getLoss,lossPercent] = calProfitPercent();
            msg.innerText = "OH NO! You made a LOSS of INR "+getLoss+" and loss percent is "+lossPercent;

    }
}
//function submitBtn()

btn.addEventListener("click",calculateProfitAndLoss);