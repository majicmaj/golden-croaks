import { useState } from 'react';

const OPTIONS= ["Rock", "Paper", "Scissors"]

function RockPaperScissors() {
  const [playerOnePick, setPlayerOnePick] = useState("")
  const [playerTwoPick, setPlayerTwoPick] = useState("")
  const [playerOneHp, setPlayerOneHp] = useState(10)
  const [playerTwoHp, setPlayerTwoHp] = useState(10)
  const [winner, setWinner] = useState("")
  const [playing, setPlaying] = useState(true)

  const getPlayerTwoPick = () => {
    const number = Math.floor(Math.random() * OPTIONS.length)
    setPlayerTwoPick(OPTIONS[number])
  }

  const pickRoundWinner = () => {
    if (playerOnePick === playerTwoPick) return
    else if (
        playerOnePick === "Rock" && playerTwoPick === "Scissors" || 
        playerOnePick === "Paper" && playerTwoPick === "Rock" ||
        playerOnePick === "Scissors" && playerTwoPick === "Paper"
    ) setPlayerOneHp(playerOneHp - 1)
    else setPlayerTwoHp(playerTwoHp - 1)
  }

  const play = (pick: string) => {
    pickRoundWinner()
    pickGameWinner()
    setPlayerOnePick(pick)
    getPlayerTwoPick()
    }

  const pickGameWinner = () => {
    if (playerOneHp === 0) {
        setPlaying(false)
        setWinner("Bro lost to Math.random 💀")
        
    }
    else if (playerTwoHp === 0) {
        setPlaying(false)
        setWinner("Good ol fashioned win brah 🦍💯💪")
        
    }
    else setPlaying(true)
    }
    

  const resetGame = () => {
    setPlayerOnePick("")
    setPlayerTwoPick("")
    setPlayerOneHp(10)
    setPlayerTwoHp(10)
    setWinner("")
    setPlaying(true)
  }

return (
<div>
  {playing === false ? (
   <div className="w-full h-full bg-slate-500">
    <div className="text-center"> {winner ==="" ? "(Audience)👀👀👀" : winner} </div>
    <div className="flex justify-between">
     <div className="bg-blue-500 ml-2 border-2 pl-1 pr-1 rounded border-black font-semibold"> Player 1: {playerOnePick} HP: {playerOneHp} </div>
     <div className="bg-red-500  mr-2 border-2 pl-1 pr-1 rounded border-black font-semibold"> Player 2: {playerTwoPick}  HP: {playerTwoHp} </div>
    </div>
    <div className="flex justify-start ml-2">
     {OPTIONS.map((option) => (
        <button className="mt-4 pr-2 pl-2 mr-2 border rounded border-black font-semibold bg-yellow-300"> {option} </button>
     ))}
    </div>
    <div className="flex justify-center">
    <button className="mb-1 border-2 pl-1 pr-1 rounded border-black font-semibold bg-purple-600"  onClick={() => {resetGame()}}> Restart </button>
    </div>
</div> 
) : (
    <div className="w-full h-full bg-slate-500">
    <div className="text-center"> (Audience)👀👀👀 </div>
    <div className="flex justify-between">
     <div className="bg-blue-500 ml-2 border-2 pl-1 pr-1 rounded border-black font-semibold"> Player 1: {playerOnePick} HP: {playerOneHp} </div>
     <div className="bg-red-500  mr-2 border-2 pl-1 pr-1 rounded border-black font-semibold"> Player 2: {playerTwoPick}  HP: {playerTwoHp} </div>
    </div>
    <div className="flex justify-start ml-2">
    {OPTIONS.map((option) => (
        <button className="mt-4 pr-2 pl-2 mr-2 border rounded border-black font-semibold bg-yellow-300" onClick={() => {play(option)}}>{option}</button>
     ))}
    </div>
    <div className="flex justify-center">
        <button className="mb-1 border-2 pl-1 pr-1 rounded border-black font-semibold bg-purple-600"  onClick={() => {resetGame()}}> Restart </button>
    </div>
</div> 
)}

</div> 
);
}

export default RockPaperScissors;
