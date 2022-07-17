// alert("My code is working");

//PART ONE
var shed = ["A 510", "B 308", "C 486", "D 572"];
for (var i = 0; i < shed.length; i++) {

    console.log("Your production in shed " + shed[i] + " litres per day.");
}
var A = 510; var B = 308; var C = 486; var D = 572;
var totalProduction = (A+B+C+D);
     console.log("The total production is " + totalProduction + " litres per day");

//PART TWO
//Brookside's buying rate is KSH 45 per litre
document.getElementById("input1");{
var incomeOverTime = function( selling_price, time){
    incomeOverTime = (totalProduction * selling_price * time);//Ksh 45 per litre, 7 days in a week 
    console.log("Your weekly income will be Ksh " + incomeOverTime);

    } 
}
// incomeOverTime(45, 7); //Output is "Your weekly income will be Ksh 590940"

var incomeOverTime = function( selling_price, time){
    incomeOverTime = (totalProduction * selling_price * time);
    console.log("Your yearly income will be Ksh " + incomeOverTime); //Ksh 45 per litre, Year has 365 days
}
incomeOverTime (45, 365); //Output is "Your yearly income will be Ksh 30813300"

//PART THREE

