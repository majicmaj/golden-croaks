import { useState } from 'react';

const options= ["Rock", "Paper", "Scissors"]

function RockPaperScissors() {
const [playerOnePick, setPlayerOnePick] = useState("")
const [playerTwoPick, setPlayerTwoPick] = useState("")
const [result, setResult] = useState("")


const getPlayerTwoPick = (options: string[]) => {
    const number = Math.floor(Math.random() * options.length)
    setPlayerTwoPick(options[number])
}

const playRock = (options: string[]) => {
    setPlayerOnePick("Rock")
    getPlayerTwoPick(options)
}

const playPaper = (options: string[]) => {
    setPlayerOnePick("Paper")
    getPlayerTwoPick(options)
}

const playScissors = (options: string[]) => {
    setPlayerOnePick("Scissors") 
    getPlayerTwoPick(options)
}

const picKWinner = () => {
    if (playerOnePick === playerTwoPick) {setResult("Tie 👔")}  
    else if (
        playerOnePick === "Rock" && playerTwoPick === "Scissors" || 
        playerOnePick === "Paper" && playerTwoPick === "Rock" ||
        playerOnePick === "Scissors" && playerTwoPick === "Paper"
    ) { 
        setResult("Player 1 wins 💅")}
    else {
        setResult("Player 2 wins 💀")}
}


return (
<div>

   
    <button onClick={() => { playRock(options); picKWinner(); }}> Rock </button>
    <button onClick={() => { playPaper(options); picKWinner(); }}>  Paper </button>
    <button onClick={() => { playScissors(options); picKWinner(); }}>  Scissors </button>

    <div>
        <div> Player 1:{playerOnePick}</div>
        <div> Player 2:{playerTwoPick}</div>
        <div> Result:{result} </div>
    </div>
</div>
);

}
export default RockPaperScissors;
