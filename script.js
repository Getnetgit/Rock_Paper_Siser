const rps=["R", "P", "S"];
//alert()
//confirm()

let userChoise="";
let isEntryValid=false;
let retryAlert=false;
let computerChoice="";
//let startPlaying=true;
let continuePlaying=false;
let computerScore=0;
let playerScore=0;
/*
function userPrompt(){
    userChoise=prompt("Enter R for Rock , P for Paper and S for Scissors").toUpperCase()
}*/



function computerplay(){
    let Index=Math.floor(Math.random()*(rps.length));
    computerChoice=rps[Index];
    return computerChoice;
}


    start_position:
     for (let i = 0; i < (rps.length); i++) {
        
       if (i==0) {
        userChoise=prompt("Enter R for Rock , P for Paper and S for Scissors").toUpperCase(); 
        }
        
        let element = rps[i];
        if (userChoise === element) {
            isEntryValid=true;
            computerplay();
            if ((userChoise=="R" && computerChoice=="S")|| (userChoise=="S" && computerChoice=="P") || (userChoise=="P" && computerChoice=="R")) {
              
                playerScore = playerScore +1;
                alert("computer: " + computerChoice +" and you:  " + userChoise + "  You Won!" + "          computer score: "+ computerScore +" and Player score : " + playerScore);
                continuePlaying=true;
                
               
            } else if (userChoise==computerChoice) {
                
                alert("computer: " + computerChoice +" and you:" + userChoise + "  Equal" + "                computer score: "+computerScore +" and Player score : "+ playerScore );
                continuePlaying=true;
            } else {
                computerScore = computerScore +1;
                alert("computer: " + computerChoice +" and you:" + userChoise + "  Sorry you loss" + "        computer score: "+computerScore +" and Player score : "+ playerScore );
                continuePlaying=true;
               // console.log("1"+continuePlaying);
            }

        }  
        
        if ((i == (rps.length-1)) && !isEntryValid) {
           retryAlert=alert("Entry not valid, Try a valid Entry")
           continuePlaying=true;
        } 
        if (continuePlaying) {
            continuePlaying=false;
            isEntryValid=false;
            if (confirm("Do you want to continue playing")) {
                
                i=-1;
                continue start_position;
            } else {
                close("exit.html", "Thanks for Visiting!");
            }
           // startPlaying
            
            
        } 
        
    }

  

