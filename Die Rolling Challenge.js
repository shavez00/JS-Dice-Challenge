let diceRoll = turn => {
	checkFormat(checkInput(turn));
	
const d =	turn.indexOf("d");
numOfDice = turn.slice(0, d);

const e = turn.length;
typeOfDice = turn.slice(d + 1, e);
let result = 0

individualDiceDisplay = "";

for (let i = 0; i < numOfDice; i++) {
	const diceResult = Math.floor(Math.random() * (typeOfDice - 1) + 1);
	result = result + diceResult;
	individualDiceDisplay = diceResult + " " + individualDiceDisplay;
}
	
	return result + ": " + individualDiceDisplay;
}
	
try {
	console.log(diceRoll("5d20"));
} catch (e) {
	switch (Object.keys(e)[0]) {
		case "e1":
		  console.log (e.e1);
		  break;
		case "e2":
		  console.log (e.e2);
		  break;
		case "e3":
		  if (e.e3) console.log (e.e3);
		  break;
		default:
		  console.log(e);
	}
}
	
function checkInput(input) {
		if (typeof(input) != "string") {
		throw ({e1: "Input needs to be a string"});
	 }
	 
	 return input;
}

function checkFormat(input) {
		if (input.search(/^\d+d([4]|[1-2][0]|[6]|[8]|[1][2])$/g) < 0 || input.indexOf(" ") > 0) {
		throw ({e2: "Input must be in the format of #d#, 4, 6, 8, 10, 12, and 20 are the only valid dice"}) ;
	}
	
	x = input.split("");
	let count = 0;
	x.forEach((char)=> {
		if (char === "d") {
			count++;
		}
	});
	if (count > 1) {
		throw ({e3: "Input must be in the format of #d#"});
	}
}
