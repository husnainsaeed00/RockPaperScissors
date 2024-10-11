// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function PlayRound(humansChoice,computersChoice){
    if(humansChoice==="Rock" && computersChoice==="Paper"){
        console.log("You Lost..Try again")
    }
    else if(humansChoice==="Rock" && computersChoice==="Scissors"){
        console.log("you Won")
    }
    else if(humansChoice==="Paper" && computersChoice==="Rock"){
        console.log("you Won")
    }
    else if(humansChoice==="Paper" && computersChoice==="Scissors"){
        console.log("You Lost...Try Again")
    }
    else if(humansChoice==="Scissors" && computersChoice==="Rock"){
        console.log("You lost...Try Again")
    }
    else if(humansChoice==="Scissors" && computersChoice==="Paper"){
        console.log("You Won")
    }
    else if(humansChoice ===computersChoice){
        console.log("its a Tie")
    }
    else console.log("invalid Input")
}
function getHumanChoice(){
    return prompt("Enter your value:")
}
function getComputersChoice(){
    let gameTurns=["Rock","Paper","Scissors"]
    let turn=Math.floor(Math.random()*gameTurns.length)
    return gameTurns[turn]
}


let human=getHumanChoice()
let computer=getComputersChoice()
PlayRound(human,computer)