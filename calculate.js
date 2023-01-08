const initialPrice = document.querySelector('#initial-price')
const currentPrice = document.querySelector('#current-price')
const stockQuantity = document.querySelector('#stocks-quantity')
const submitBtn = document.querySelector('#submit-btn') 
const outputBox = document.querySelector('#output-box')

submitBtn.addEventListener("click",submitHandler)
function calculateProfitAndLoss(initial,quantity,current){


if(initial > current){
    //loss
    
    var loss = (initial - current)* quantity
    var lossPercentage = (loss / initial )*100
   showOutput(`hey the loss is ${loss} and percentage is ${lossPercentage}%`)
}
else if(initial < current)
{
     var profit = (current - initial) * quantity
//profit
var profitPercentage = (profit / initial) * 100
showOutput(`hey the profit is ${profit} and profit percentage is ${profitPercentage}%`)
}

else{
    //rest of logic
   showOutput(`no loss no gain`)
}
}
function submitHandler(){
    if((initialPrice.value == "") || (stockQuantity.value == "" ) || (currentPrice.value == "")){
        showOutput(`please fill all fields`)
    }
    else{
var ip = Number(initialPrice.value);

var qty = Number(stockQuantity.value)
var curr = Number(currentPrice.value)



    calculateProfitAndLoss(ip,qty,curr)
    }
}

function showOutput(message){
outputBox.innerHTML = message

}
