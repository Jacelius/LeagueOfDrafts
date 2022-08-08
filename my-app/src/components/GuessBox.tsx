import '../style/GuessBox.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// central component with all the buttons and logic for the game
// IDEA: add image of rank tier for current game
function GuessBox() {
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    return(
        <div className="guessBox">
           <Button variant="outline-primary" onClick={() => didPlayerWin("Blue")}> Blue </Button>
           <Button variant="outline-danger" onClick={() => didPlayerWin("Red")}> Red </Button> 
           <br></br>
           <p id="correctCount">Correct Count: {correctCount}</p>
           <p id="incorrectCount">Incorrect Count: {incorrectCount}</p>

        </div>
    )

    
    function didPlayerWin(choice: string) { // TODO: add logic for winning
        if (choice === "Blue") {
            setCorrectCount(correctCount + 1);
        }
        else if (choice === "Red") {
            setIncorrectCount(incorrectCount + 1);
        }
        
    }

}


export default GuessBox;