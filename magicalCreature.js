// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "pokifly";


// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "glow, fly";

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a 
let isFriendly = "true";
// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAge = 25;



// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit = visitorAge>15;
console.log("Can the visitor see the creature?", canVisit);


// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.

let zooSummary= "Here is " +  creatureName + " It can " + creatureDescription + " Is it friendly? True or False "+ isFriendly + " How old do you have to be to visit? " + visitorAge 
console.log(zooSummary)
// 7. Print the summary using console.log()
console.log(creatureName)
console.log(creatureDescription)
console.log(isFriendly)
console.log(visitorAge)


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
let creatureName2 = "Tooks";
let creatureName3 = "Zoomer";
let creatureName4 = "Pyra";
let creatureDescription2 = "blue and has mechanical limbs";
let creatureDescription3 = " red and has super speed";
let creatureDescription4 =  " black and uses dark purple lightning";
let isFriendly2 = "true";
let isFriendly3 = "true";
let isFriendly4 = "true";
let visitorAge2 = 22;
let visitorAge3 = 37;
let visitorAge4 = 18;
let canVisit2 = visitorAge>15;
let canVisit3 = visitorAge>15;
let canVisit4 = visitorAge>15;
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.
let allZooSummaries = "Here are " +  creatureName2 + creatureName3 + creatureName4 + "Here is " +  creatureName


  console.log(allZooSummaries)