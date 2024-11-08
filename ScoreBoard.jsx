import { useState } from "react";
import './Score.css';

function ScoreBoard() {
    const [score, setScore] = useState(0); 
    const [wt, setWt] = useState(0); 

    function handler(v) {
        if (v === 'out') {
            setWt(wt + 1);
        } else {
            setScore(score + Number(v)); 
        }
    }

    return (
        <>
            <h1>Score</h1>
            <div className="sc">
                <h1>Runs: {score}</h1>
                <h1>Wickets: {wt}</h1>
            </div>
            <div className="runs">
                <button onClick={() => handler('1')}>1</button>
                <button onClick={() => handler('2')}>2</button>
                <button onClick={() => handler('3')}>3</button>
                <button onClick={() => handler('4')}>4</button>
                <button onClick={() => handler('6')}>6</button>
                <button onClick={() => handler('out')}>OUT</button>
            </div>
        </>
    );
}

export default ScoreBoard;