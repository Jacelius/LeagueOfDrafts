import '../style/GuessBox.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { whichTeamWon } from '../util';

interface GuessBoxProps {
    match: any;
    nextMatch: () => void;
}

function GuessBox({ match, nextMatch } : GuessBoxProps) {
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

    function didPlayerWin(choice: string) {
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
                showGuessResult(true);
            } else {
                setIncorrectCount(incorrectCount + 1);
                showGuessResult(false);
            }
        }
        nextMatch() 
    }
    
    function showGuessResult(win: boolean) { // would be fun to do some sort of animation here
        if (win) {
            alert("Correct!")
        } else {
            alert("Wrong :(")
        }
    }
    return(
        <div className="guessBox">
            <p>Which side won this match?</p>
            <div className='sideGridContainer'>
                <Button variant="outline-primary" onClick={() => didPlayerWin("Blue")}> Blue </Button>
                <Button variant="outline-danger" onClick={() => didPlayerWin("Red")}> Red </Button> 
            </div>
            <br></br>
            <p id="correctCount">Correct Count: {correctCount}</p>
            <p id="incorrectCount">Incorrect Count: {incorrectCount}</p>

        </div>
    )
}


export default GuessBox;