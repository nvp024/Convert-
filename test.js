let inputMoney = document.getElementById('inputMoney')
let typeOfInputMoney = document.getElementById("inputTypeOfMoney")
let typeOfOutputMoney = document.getElementById("outputTypeOfMoney")
let outputMoney = ''
let vnd = ''

function converseMoney() {

switch(Number(typeOfInputMoney.value)) {
    case 1 : 
        vnd = Number(inputMoney.value)*20000
        break; 
    case 2 : 
        vnd = Number(inputMoney.value)*200  
        break; 
    case 3 : 
        vnd = Number(inputMoney.value) 
        break; 
}
switch(Number(typeOfOutputMoney.value)) {
    case 1 : 
        outputMoney = vnd/20000 
        break; 
    case 2 : 
        outputMoney = vnd/200 
        break; 
    case 3 :  
        outputMoney = vnd 
        break; 
}
document.getElementById('outputMoney').textContent= "Output: " + outputMoney

}



//console.log('output money : ' + outputMoney)