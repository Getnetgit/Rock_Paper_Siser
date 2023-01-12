//prompt for user inpt rps
let rps=["R", "P", "S"];
let userChoise="";
let computerChoice="";
let userResult=0;
let computerResult=0;
let ThanksMessage=document.querySelector("h2");

function computerPlay(){
    let Index=Math.floor(Math.random()*(rps.length));
    computerChoice=rps[Index];
    return computerChoice;
}

function userPlay(){
 userChoise=prompt("Enter R for Rock , P for Paper and S for Scissors").toUpperCase();
 return userChoise;
}

function rpsGame(){
    let continueGame=0;
    do {
        userResult=0;
        computerResult=0;
        let round=0
       do {
            
            userPlay();
            computerPlay();
            if (rps.includes(userChoise)) {
                if (userChoise === computerChoice) {
                    alert("Computer choses" +"  "+ computerChoice + "  "+ "Tie");
                
                }else if((userChoise === "R" && computerChoice === "P") || (userChoise === "P" && computerChoice === "S") ){
                    alert("Computer choses:" +"  "+ computerChoice + "  "+ "Computer Wins");
                    computerResult++;
                }else{
                    alert("Computer choses:"+"  " + computerChoice + "  "+ "User  Wins");
                    userResult++;
                }
                round++
            } else {
                alert("Please enter a valid choice R, P or S");
            }
            
            if (round===3) {
                let finalResult="";
                
                alert("SCORE\nUser:"+"  " + userResult +"\nComputer:"+"  " + computerResult);
                if (confirm("Do you want to continue playing?")) {
                    continueGame=1;
                }
            }
        }while (round<3)
        
    } while (continueGame==1);
}

rpsGame();
ThanksMessage.innerHTML="Thank you for Playing!!"