// getting buttons/input/labels

const Player_input = document.getElementById("player_input");
const Enter_btn = document.getElementById("Submit_btn");
const answer_label = document.getElementById("Tell-The-Player");
const tries_label = document.getElementById("Tries-label")
// adding other vari;ables
const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
let tries = 0;
let guess
let running = true;

// doing everything in this function after clicking
Enter_btn.onclick = function(){
    // making the player guess a number
    

    guess = Player_input.value;
    guess = Number(guess)

    // checking if its correct

    if(guess  === answer){
        // resetting everything

        tries = 0 ;
        answer_label.textContent = "Correct. Play again!"
        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    
    }

    // checking for if the player wrote a higher number
    else if (guess > answer){
        // checking for tries first
        if (tries <= 9){
            // changing text and adding a try
            answer_label.textContent = "lower"
            tries += 1;
            tries_label.textContent = `Tries: ${tries}`
        }

        // if the player doesin't have enough tries
        else{
            answer_label.textContent = "Tries finished, added new number"
            tries = 0 ;
            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
            
        }
    }
    
    // checking for if the player wrote a lower number
    else{
        // if he has enough tries
        if(tries <= 9){
            
            answer_label.textContent = "higher"
            tries += 1;
            tries_label.textContent = `Tries: ${tries}`
        }
        // if he doesin't
        else{
            answer_label.textContent = "Tries finished, added new number"
            tries = 0 ;
            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
        }
    }

    }


   




