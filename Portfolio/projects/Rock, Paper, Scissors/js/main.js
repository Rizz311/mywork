var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;

function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function playerThrowsLizard(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"lizard");
}
function playerThrowsSpock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");
}


function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.20){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4){
		botsWeapon="paper";
	}
		else if(randomNumber<.6){
		botsWeapon="lizard";
	}
		else if(randomNumber<.8){
		botsWeapon="spock";
			}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Not very often 2 guys share a Bud Light");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
   	(botsWeapon=="scissors" && playersWeapon=="lizard") ||
  	(botsWeapon=="paper" && playersWeapon=="rock") ||
   	(botsWeapon=="paper" && playersWeapon=="spock") ||
    (botsWeapon=="rock" && playersWeapon=="lizard") ||
   	(botsWeapon=="rock" && playersWeapon=="scissors") ||
   	(botsWeapon=="spock" && playersWeapon=="rock") ||
   	(botsWeapon=="spock" && playersWeapon=="scissors") ||
   	(botsWeapon=="lizard" && playersWeapon=="spock") ||
   	(botsWeapon=="lizard" && playersWeapon=="paper")
	){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("He took a Bud Light! Get it back!");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("DILLY, DILLY!");
}
function displayCompleteMessage(msg) {
	document.getElementById("status").innerHTML=msg;

}
console.log(onclick);
