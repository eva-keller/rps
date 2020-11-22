let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('results')
const computerChoice = document.getElementById('computer-choice')

//get a random computer choice


//get Results
function results() {
    if(computerChosen === userChosen){
        return result = "It is a Tie!"
    }else if(computerChosen === 'rock' && userChosen === 'paper'){
        return result = 'you win'
    }else if(computerChosen === 'rock' && userChosen === 'scissors'){
        return result = 'you lost'
    }else if(computerChosen === 'paper' && userChosen === 'rock'){
        return result = 'you lost'
    }else if(computerChosen === 'paper' && userChosen === 'scissors'){
        return result = 'you win'
    }else if(computerChosen === 'scissors' && userChosen === 'rock'){
        return result = 'you win'
    }else if(computerChosen === 'scissors' && userChosen === 'paper'){
        return result = 'you win'
    }
}