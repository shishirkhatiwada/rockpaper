let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissiors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function changeS(letter){
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissiors"
}

function win(userChoice, computerChoice){
    userScore++;
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${changeS(userChoice)} beats ${changeS(computerChoice)}  . You win`;
}

function loose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${changeS(userChoice)} looses to ${changeS(computerChoice)}  . You loose`;
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `It's a draw`;
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    
   switch (userChoice + computerChoice) {
    case "rs" :
    case "pr":
    case "sp" :
        win(userChoice, computerChoice);
        break;

        case "sr" :
        case "rp":
        case "ps" :
                loose(userChoice, computerChoice);
                break;

        case "rr" :
        case "pp":
        case "ss" :
            draw(userChoice, computerChoice);
            break;
   }

}



function main(){
    rock_div.addEventListener("click",function(){
    game("r");
})

paper_div.addEventListener("click",function(){
    game("p");
})

scissiors_div.addEventListener("click",function(){
    game("s");
})
}
main();