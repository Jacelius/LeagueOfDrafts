import '../style/GuessBox.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { whichTeamWon, getMatch } from '../util';

interface GuessBoxProps {
    match: any;
}
  
// central component with all the buttons and logic for the game
// IDEA: add image of rank tier for current game - needs some sort of logic to determine which tier to show (average)

function GuessBox({ match } : GuessBoxProps) {
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

    
    function didPlayerWin(choice: string) {
        getMatch(match).then(match => { // takes the first match in the array
            const latestMatchRes = whichTeamWon(match)
            if (choice === "Blue") {
                if (latestMatchRes === "Blue") {
                    setCorrectCount(correctCount + 1);
                    showGuessResult(true);
                } else {
                    setIncorrectCount(incorrectCount + 1);
                    showGuessResult(false);
                }
            }
            else if (choice === "Red") {
                if (latestMatchRes === "Red") {
                    setCorrectCount(correctCount + 1);
                } else {
                    setIncorrectCount(incorrectCount + 1);
                }
            } 
        })
    }

    function showGuessResult(win: boolean) { // would be fun to do some sort of animation here
        if (win) {
            alert("Correct!")
        } else {
            alert("Wrong :(")
        }
    }

    function getNextMatch() {
        
    }

}


export default GuessBox;