var vacationType = prompt ("Hi! What type of vacation are you interested in... musical, tropical, or adventurous?");
var groupSize = prompt ("Cool! How many people are in your group?");

function userInput (vacationType) { 
   
var modeTravel;
var Destination;
 if (vacationType == "musical") {
    Destination = ("New Orleans!");
 } 
 else if (vacationType == "tropical") {
     Destination = ("a beach in Mexico!");
 } 
 else if (vacationType == "adventurous") {
    Destination = ("the Grand Canyon to whitewater raft!");
 }
else  {
    Destination =("Please select a type.");
}
if (groupSize == "") {
    modeTravel = ("Please input mode of travel");
} 
else if (2< groupSize <6 )  {
    modeTravel = ("travel in a helicopter.");
} 
else if (groupSize <= 2); {
    modeTravel= ("travel first-class.");
} 
if (groupSize >=6) {
    modeTravel = ("travel in a charter plane.");
}
else    
result = (`Since you want to go on a ${vacationType} vacation, you'll be going to ${Destination}.  Your group number is  ${groupSize} and you would ${modeTravel}` )  

 console.log(result); 
}

