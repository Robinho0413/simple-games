'use client';

import { useState } from "react";
import { Button } from "../components/button";


const choices = ['pierre', 'feuille', 'ciseaux'];
var score = 0;
var winstreak = 0;

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice: string, computerChoice: string) {
    if (userChoice === computerChoice) {
        winstreak = 0;
        return 'Égalité';
    }

    if (
        (userChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (userChoice === 'feuille' && computerChoice === 'pierre') ||
        (userChoice === 'ciseaux' && computerChoice === 'feuille')
    ) {
        winstreak += 1;
        score += winstreak * 2;
        return 'Gagné';
    }
    winstreak = 0;
    score = 0;
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
            <div className="flex flex-row justify-between items-center text-center">
                <h1 className="text-5xl uppercase font-black">Shifumi</h1>
                <h2 className="text-4xl font-black">score: {score}</h2>
            </div>
            <div className="flex flex-col justify-between items-center h-full p-10">

                <div>
                    <p className="text-4xl font-bold">{computerChoice}</p>
                </div>

                <div>
                    <p className="text-5xl font-bold">{result}</p>
                    {winstreak > 2 && (
                        <p className="text-4xl font-black">{winstreak}</p>
                    )}
                </div>

                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="text-4xl font-bold">{userChoice}</p>
                    <ChoiceButtons />
                </div>

            </div>
        </div>
    );
}