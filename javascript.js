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
        return "win"
    }
    else if(computerSelection==="Paper"){
        return "lose"
    }
}
 else if(playerSelection.toUpperCase()==="SCISSOR"){
    if(computerSelection==="Scissor"){
        return "draw"
    }
    else if(computerSelection==="Paper"){
        return "win"
    }
    else if(computerSelection==="Rock"){
        return "lose"
    }
 }
 else if(playerSelection.toLowerCase()==="paper"){
    if(computerSelection==="Rock"){
        return "win"
    }
    else if(computerSelection==="Paper"){
        return "draw"
    }
    else if(computerSelection==="Scissor"){
        return "lose"
    }
    else{
        return "Please Enter rock or Paper or Scissor"
    }
 }
}




//(Round("ROCk", choice));


function game(){


let player=0
let computer =0;
  
 
    for(let i=1; i<=5; i++){
        const choice=getComputerChoice()
        const result = Round(prompt("Enter your value"), choice);
        
        if (result==='win'){
            
            player=player+1;
        }
        else if(result==="lose"){
            computer=computer+1;
        }
    
    }

    if(player>computer){
        
        return "win"
    }
    else if(player<computer){
        

        return "lose"
    }
  else if(player===computer){
    return "draw"
  }
}
console.log(game())

