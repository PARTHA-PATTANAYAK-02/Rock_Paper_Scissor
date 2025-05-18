let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreUpdate=document.querySelector("#user-score");
const compScoreUpdate=document.querySelector("#computer-score");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");

const resetScore=()=>{
    userScore=0;
    compScore=0;
    userScoreUpdate.innerText = userScore;
    compScoreUpdate.innerText = compScore;
    comp.classList.remove("glow");
    user.classList.remove("glow");
    msg.innerText="You reset score play again!"
}
const genrateComputerChoice=() => {
    const optins=["Rock","Paper","Scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return optins[randomindex];
}

const drawgame = () => {
    msg.innerText="Game Was Draw! play again.";
    msg.classList.remove("Win","Lose");
    msg.classList.add("Draw");
}
const showWinner=(userwin,comchoice,userChoice) => {
    if(userwin){
        userScore++;
        userScoreUpdate.innerText=userScore;
        msg.innerText=`You Win! Your choice ${userChoice} comp choice ${comchoice}`;
        msg.classList.remove("Draw","Lose");
        msg.classList.add("Win");
        comp.classList.remove("glow");
        user.classList.add("glow");
    }else{
        compScore++;
        compScoreUpdate.innerText=compScore;
        msg.innerText=`You lose! Your choice ${userChoice} comp choice ${comchoice}`;
        msg.classList.remove("Win","Draw");
        msg.classList.add("Lose");
        user.classList.remove("glow");
        comp.classList.add("glow");
    }
}
const playGame=(userChoice) => {
    console.log(userChoice);
    const comchoice=genrateComputerChoice();
    console.log(comchoice);

    if(userChoice === comchoice){
        // draw
        drawgame();
    }else{
        let userwin=true;
        if (userChoice === "Rock") {
            // sicssors, paper
            userwin=comchoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            // Rock Sicssors
            userwin=comchoice==="Rock" ? true : false;
        }else{
            // Rock, Paper
            userwin=comchoice==="Paper" ? true : false;
        }
        showWinner(userwin,comchoice,userChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // Apply zoom class to the clicked choice
        choice.classList.add("zoom");
        // Remove zoom class after a short delay
        setTimeout(() => {
            choice.classList.remove("zoom");
        }, 200);
        playGame(userChoice);

    })
})
// for button
let icon=document.querySelector("#mode");
let mode="light"; // dark
let body=document.querySelector("body");
let profile=document.querySelector("#social");
icon.addEventListener("click",(evt) => {
    if(mode === "light"){
        profile.style.color="white";
        body.classList.add("bodyDark");
        body.classList.remove("bodyLight");
        icon.classList.add("icon-dark");
        mode="dark";
        icon.classList.add("rotateX");
        icon.classList.remove("rotateY");
    }else{
        profile.style.color="black";
        body.classList.add("bodyLight");
        body.classList.remove("bodyDark");
        mode="light";
        icon.classList.remove("icon-dark");
        icon.classList.add("rotateY");
        icon.classList.remove("rotateX");
    }
})
const rst=document.querySelector("#reset");
rst.addEventListener("click",() =>{
    resetScore();
    rst.classList.add("reset-style");
    msg.classList.remove("Draw","Win","Lose");
    setTimeout(() => {
        rst.classList.remove("reset-style");
    }, 200);
})