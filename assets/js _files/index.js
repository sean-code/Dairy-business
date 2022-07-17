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
const wk = document.getElementById("input2");{
   let weeklyIncome = prompt("Enter selling price and time, separated by a comma");
} 
var incomeOverTime = function( selling_price, time){
    incomeOverTime = (totalProduction * selling_price * time);//Ksh 45 per litre, 7 days in a week 
    console.log("Your weekly income will be Ksh " + incomeOverTime);
}
// incomeOverTime(45, 7); //Output is "Your weekly income will be Ksh 590940"

var incomeOverTime = function( selling_price, time){
    incomeOverTime = (totalProduction * selling_price * time);
    console.log("Your yearly income will be Ksh " + incomeOverTime); //Ksh 45 per litre, Year has 365 days
}
incomeOverTime (45, 365); //Output is "Your yearly income will be Ksh 30813300"

//PART THREE
var months = [{                  //creating an array within an object
    January: 30,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
}]
const yearly = document.getElementById("input3")
var incomePerMonth = function(selling_price, days){
    incomePerMonth = (totalProduction * selling_price * days); 
    for (var i = 0; i <months.length; i++) {
    console.log("Your income for" + months[i] + incomePerMonth);
    }
}
let monthlyIncome = prompt("Enter the month")
incomePerMonth(45, 30);