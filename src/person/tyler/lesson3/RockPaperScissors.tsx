import { useState } from "react";

const CHOICES = ['Rock', 'Paper', 'Scissors']

const getRandomInt = () => {
    return Math.floor(Math.random() * CHOICES.length)
}

const determineWinner = (player: string | undefined, computer: string | undefined) => {
    if (player === computer) {
      return "It's a tie!";
    }
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }
    return 'Defeat!';
  };

const RockPaperScissors = () => {
    const [choice, setChoice] = useState<string>()
    const [compChoice, setCompChoice] = useState<string>()
    const [winner, setWinner] = useState<string>()

    const selectRandomComputerChoice = () => {
        const index = getRandomInt()
        setCompChoice(CHOICES[index])
    }

    const handleclick = (index: number) => {
        setChoice(CHOICES[index])
        selectRandomComputerChoice()

        const computerChoice = CHOICES[getRandomInt()];
        setCompChoice(computerChoice);

        setWinner(determineWinner(choice, computerChoice));
    };


    
    
return(
    <div className="grid text-lg border w-1/3">
        <div className="justify-center py-8 space-x-6 inline-flex">
          <div>{choice}</div>
          <div>{compChoice}</div>
        </div>
        <div className="inline-flex justify-center p-2 gap-2">
          <button onClick={() => handleclick(0)}>Rock</button>
          <button onClick={() => handleclick(1)}>Paper</button>
          <button onClick={() => handleclick(2)}>Scissors</button>
        </div>
        <div className="flex justify-center m-8">{winner}</div>
    </div>
    )
}

export default RockPaperScissors;