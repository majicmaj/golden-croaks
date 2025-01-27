import { useState } from "react";

const CHOICES = ['Rock', 'Paper', 'Scissors']

const getRandomInt = () => {
    return Math.floor(Math.random() * CHOICES.length)
}

const RockPaperScissors = () => {
    const [choice, setChoice] = useState<string>()
    const [compChoice, setCompChoice] = useState<string>()

    const selectRandomComputerChoice = () => {
        const index = getRandomInt()
        setCompChoice(CHOICES[index])
    }

    const handleclick = (index: number) => {
        setChoice(CHOICES[index])
        selectRandomComputerChoice()
    }
    
return(
    <div>
        <div>{choice}</div>
        <div>{compChoice}</div>
        <button className="p-2" onClick={() => handleclick(0)}>Rock</button>
        <button className="p-2" onClick={() => handleclick(1)}>Paper</button>
        <button className="p-2" onClick={() => handleclick(2)}>Scissors</button>
    </div>
    )
}

export default RockPaperScissors;