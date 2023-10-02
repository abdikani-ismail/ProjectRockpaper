// console.log("hello world")

 const getComputerChoice=()=>{
 const randomNumber=(Math.floor(Math.random()*3))
    
    if(randomNumber===0){
        return 'Rock';
    }
    else if(randomNumber===1){
        return 'Paper'
    }
    else if (randomNumber===2){
        return 'Scissor';
    }
 }

function Round(playerSelection, computerSelection){
    // if(playerSelection==="rock" && computerSelection==="Paper"){
    //    return "You lose! Paper beats rock"
    // }
    // else if(playerSelection==="rock" && computerSelection==="Scissor"){
    //     return "You win rock beats Scissor"
    // }
    // else if (playerSelection==="rock" && computerSelection==="Rock"){
    //     return "draw"
    // }

    
if(playerSelection.toLowerCase()==="rock"){
    if(computerSelection==="Rock"){
        return "draw"
    }
    else if(computerSelection==="Scissor"){
        return "you win! Rocks beats Scissor"
    }
    else if(computerSelection==="Paper"){
        return "You lose! Paper beats rock"
    }
}
 else if(playerSelection.toUpperCase()==="SCISSOR"){
    if(computerSelection==="Scissor"){
        return "draw"
    }
    else if(computerSelection==="Paper"){
        return "You win! Scissor beats Paper"
    }
    else if(computerSelection==="Rock"){
        return "You lose! Rock beats Scissor"
    }
 }
 else if(playerSelection.toLowerCase()==="paper"){
    if(computerSelection==="Rock"){
        return "You win! Paper beats rock"
    }
    else if(computerSelection==="Paper"){
        return "draw"
    }
    else if(computerSelection==="Scissor"){
        return "You lose! Scissor beats Paper"
    }
    else{
        return "Please Enter rock or Paper or Scissor"
    }
 }
}




//(Round("ROCk", choice));


function game(){

  
 
    for(let i=1; i<=5; i++){
        const choice=getComputerChoice()
        console.log(Round(prompt("Enter your value"), choice))
        // console.log(x);
    }
}
game()