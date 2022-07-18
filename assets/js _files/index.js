// alert("My code is working");

//PART ONE
const dt = document.getElementById("input2");{
    prompt("Enter Shed's data, from A to D, in that order");
} 
var shed = ["A 510", "B 308", "C 486", "D 572"];
for (var i = 0; i < shed.length; i++) {

    console.log("Your production in shed " + shed[i] + " litres per day.");
}
var A = 510; var B = 308; var C = 486; var D = 572;
var totalProduction = (A+B+C+D);
     console.log("The total production is " + totalProduction + " litres per day");

//PART TWO
//Brookside's buying rate is KSH 45 per litre
const wk = document.getElementById("input2");
   let weeklyIncome = prompt("Enter selling price and time, separated by a comma");
var incomeOverTime = function( selling_price, time){
    incomeOverTime = (totalProduction * selling_price * time);//Ksh 45 per litre, 7 days in a week 
    console.log("Your weekly income will be Ksh " + incomeOverTime);
}
incomeOverTime(45, 7); //Output is "Your weekly income will be Ksh 590940"

const yl = document.getElementById("input2");{
    let yearlyIncome = prompt("Enter selling price and time, separated by a comma");
var incomeOverTime = function( selling_price, time){
    incomeOverTime = (totalProduction * selling_price * time);
    console.log("Your yearly income will be Ksh " + incomeOverTime); //Ksh 45 per litre, Year has 365 days
}
incomeOverTime (45, 365); //Output is "Your yearly income will be Ksh 30813300"

//PART THREE
totalProduction = 1876;
var months = [{Month: "January", days: 31}, {Month: "February", days:29},{Month: "March", days:31}, 
    {Month: "April", days: 30}, {Month:"May", days: 31}, {Month:"June", days:30}, {Month:"July", days:31}, {Month: "August", days: 31},
    {Month: "September", days: 30}, {Month:"October", days:31}, {Month:"November", days:30}, {Month: "December", days:31}]

var incomePerMonth = function(selling_price, days){
    incomePerMonth = (totalProduction * selling_price * months.days); 
    for (var i = 0; i<months.length; i++) {
    console.log("Your income for" + months.month + incomePerMonth);
    }
}

