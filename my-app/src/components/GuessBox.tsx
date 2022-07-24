import '../style/GuessBox.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// central component with all the buttons and logic for the game
function GuessBox() {
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    return(
        <div className="guessBox">
            <Button variant="outline-primary"> Blue </Button>
            <Button variant="outline-danger"> Red </Button>
        </div>
    )
}

export default GuessBox;