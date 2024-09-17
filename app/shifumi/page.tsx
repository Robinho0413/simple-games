'use client';

import { useState } from "react";
import { Button } from "../components/button";


const choices = ['pierre', 'feuille', 'ciseaux'];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice: string, computerChoice: string) {
    if (userChoice === computerChoice) {
        return 'Égalité';
    }

    if (
        (userChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (userChoice === 'feuille' && computerChoice === 'pierre') ||
        (userChoice === 'ciseaux' && computerChoice === 'feuille')
    ) {
        return 'Gagné';
    }

    return 'Perdu';
}


export default function Home() {
    const [startGame, setstartGame] = useState(false);
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');


    const handleStart = (option: boolean) => {
        setstartGame(option);
    };
    const handleUserChoice = (choice: string) => {
        const computerChoice = getRandomChoice();
        setUserChoice(choice);
        setComputerChoice(computerChoice);
        setResult(determineWinner(choice, computerChoice));
    };


    function ChoiceButtons() {
        if (startGame) {
            return (
                <>
                    <div className="flex flex-row gap-6">
                        <Button
                            onClick={() => handleUserChoice('pierre')}
                            intent={"primary"}
                            size={'large'}
                        >
                            Pierre
                        </Button>
                        <Button
                            onClick={() => handleUserChoice('feuille')}
                            intent={"primary"}
                            size={'large'}
                        >
                            Feuille
                        </Button>
                        <Button
                            onClick={() => handleUserChoice('ciseaux')}
                            intent={"primary"}
                            size={'large'}
                        >
                            Ciseaux
                        </Button>
                    </div>
                </>
            )
        }
        return (
            <>
                <Button
                    onClick={() => handleStart(true)}
                    intent={"primary"}
                    size={'xl'}
                >
                    Jouer
                </Button>
            </>
        )
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <h1 className="text-5xl uppercase font-black">Shifumi</h1>
            <div className="flex flex-col justify-between items-center h-full p-10">

                <div>
                    <p className="text-4xl font-bold">{computerChoice}</p>
                </div>

                <div>
                    <p className="text-5xl font-bold">{result}</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="text-4xl font-bold">{userChoice}</p>
                    <ChoiceButtons />
                </div>

            </div>
        </div>
    );
}