import '../style/GuessBox.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { whichTeamWon } from '../util';
import { Match } from '../types/Match';

interface GuessBoxProps {
    match: Match;
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
    // get patch version from match object, only first decimal
    let gameMode = "?"
    let patch = "?"
    if (match !== undefined) {
        patch = match.info.gameVersion.split(".")[0] + "." + match.info.gameVersion.split(".")[1];
        gameMode = match.info.gameMode;
    }
    return(
        <div>
            <div id="infoBox" className='flex flex-col h-1/5'>
                <h1>Match Info</h1>
                <p>Game Mode: {gameMode}</p>
                <p>Patch Version: {patch}</p>
            </div>
            <div id="guessBox">
                <p>Which side won this match?</p>
                <div className='sideGridContainer'>
                    <Button variant="outline-primary" onClick={() => didPlayerWin("Blue")}> Blue </Button>
                    <Button variant="outline-danger" onClick={() => didPlayerWin("Red")}> Red </Button> 
                </div>
                <br></br>
                <p id="correctCount">Correct Count: {correctCount}</p>
                <p id="incorrectCount">Incorrect Count: {incorrectCount}</p>
                <p id="correctPercentage">Correct Percentage: {correctCount / (correctCount + incorrectCount) * 100}%</p>
            </div>
        </div>
    )
}

function showGuessResult(win: boolean) { // would be fun to do some sort of animation here
    if (win) {
        alert("Correct!")
    } else {
        alert("Wrong :(")
    }
}


export default GuessBox;