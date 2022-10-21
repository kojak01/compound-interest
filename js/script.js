// anchor to the elements
const inputCapital = document.getElementById('capital');
const inputRate = document.getElementById('rate');
const inputN = document.getElementById('n');
const inputT = document.getElementById('t');
const inputResultValue = document.getElementById('result-value');
// capital * Math.pow((1+(0.04/12)) , (12 * 5) )
/*variables
let capital = inputCapital.value; 
let rate = inputRate.value;
let n = inputN.value; //capitalization every year
let t = inputT.value; //deposit - how many years
let finalMoney = capital * Math.pow((1 + (rate/n)), n * t); // formula for compound interest
console.log(Math.ceil(finalMoney)); // ceil / floor
*/
//put the formula in the function
function calculateCopoundInterest(capital, rate, n, t,) {
    return capital * Math.pow((1 + (rate/n)), n * t);
}
// anchor to the button
document.getElementById('calculate').addEventListener('click', function(){
    let capital = inputCapital.value; 
    let rate = inputRate.value;
    let n = inputN.value;
    let t = inputT.value;

   let result = calculateCopoundInterest(capital, rate, n, t);
   inputResultValue.value = result.toFixed(2); // 0,00
});