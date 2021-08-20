
var score = 0;
const pickUserHand =(userHand) => {
    
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    let computerHand = pickComputerHand();

    if (userHand == "rock") {
        document.getElementById("userPickedImage").src = handOptions.rock;
    }else if(userHand == "scissors"){
        document.getElementById("userPickedImage").src = handOptions.scissors;
    }else{
        document.getElementById("userPickedImage").src = handOptions.paper;
    }

    let stringResult;
    if (userHand == "rock" && computerHand == "scissors") {
        score+=1
        stringResult = "You win!";
    }else if (userHand == "scissors" && computerHand=="paper"){
        score+=1;
        stringResult = "You win!";
    }else if (userHand == "paper" && computerHand == "rock"){
        score+=1;
        stringResult = "You win!";
    }else if (userHand == "scissors" && computerHand == "rock"){
        score-=1;
        stringResult = "You Lose!";
    }else if (userHand == "paper" && computerHand == "scissors"){
        score-=1;
        stringResult = "You Lose!";
    }else if (userHand == "rock" && computerHand == "paper"){
        score-=1;
        stringResult = "You Lose!";
    }else{
        stringResult ="Its A TIE"
    }
    let scoreHeader = document.querySelector("#scoreHeader");
    let decision = document.querySelector(".decision");

    scoreHeader.innerHTML = score;
    decision.innerHTML = stringResult
}



const handOptions={
    "rock":"assets/Rock.png",
    "paper":"assets/Paper.png",
    "scissors":"assets/Scissors.png"
}

const array =["rock","paper","scissors"];
const pickComputerHand = () => {

    let computerHand = Math.floor(Math.random() * 3);
    let handPicked = handOptions[array[computerHand]]
    document.getElementById("computerPickedImage").src= handPicked;
    return array[computerHand];

}

let playAgain = document.querySelector(".newGame");
playAgain.addEventListener("click",()=>{

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
})
