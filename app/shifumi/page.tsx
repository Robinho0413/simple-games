'use client';

import { useState } from "react";

export default function Home() {
    const [startGame, setstartGame] = useState(false);

    const [choice, setChoice] = useState('');

    const handleStart = (option: boolean) => {
        setstartGame(option);
    };

    const handleChoice = (option: string) => {
        setChoice(option);
    };

    function ChoiceButtons() {
        if (startGame) {
            return (
                <>
                    <h2>Faites votre choix</h2>
                    <div className="flex flex-row gap-6">
                        <button
                            onClick={() => handleChoice('Pierre')}
                            className="bg-slate-300 p-3 rounded-lg"
                        >
                            Pierre
                        </button>
                        <button
                            onClick={() => handleChoice('Feuille')}
                            className="bg-slate-300 p-3 rounded-lg"
                        >
                            Feuille
                        </button>
                        <button
                            onClick={() => handleChoice('Ciseaux')}
                            className="bg-slate-300 p-3 rounded-lg"
                        >
                            Ciseaux
                        </button>
                    </div>
                </>
            )
        }
        return (
            <>
                <button
                    onClick={() => handleStart(true)}
                    className="bg-slate-300 p-3 rounded-lg"
                >
                    Jouer
                </button>
            </>
        )
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl uppercase font-black">Shifumi</h1>
            <div>
                <div className="flex flex-col gap-4">
                    <ChoiceButtons />
                </div>
            </div>
        </div>
    );
}