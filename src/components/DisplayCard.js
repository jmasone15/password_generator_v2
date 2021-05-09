import React from 'react';
import lowerLetters from "../characters/lower";
import upperLetters from "../characters/upper";
import numberCharacters from "../characters/number";
import specialCharacters from "../characters/special";
import { Button } from 'react-bootstrap';

export default function DisplayCard({ setPassword, setShowPass, options }) {

    const generatePassword = (e) => {
        e.preventDefault();
        let characterArray = [];
        let passArray = [];

        if (options.lower === "true") {
            for (let i = 0; i < lowerLetters.length; i++) {
                characterArray.push(lowerLetters[i]);
            }
        }
        if (options.upper === "true") {
            for (let i = 0; i < upperLetters.length; i++) {
                characterArray.push(upperLetters[i]);
            }
        }
        if (options.number === "true") {
            for (let i = 0; i < numberCharacters.length; i++) {
                characterArray.push(lowerLetters[i]);
            }
        }
        if (options.special === "true") {
            for (let i = 0; i < specialCharacters.length; i++) {
                characterArray.push(specialCharacters[i]);
            }
        }

        for (let i = 0; i < options.length; i++) {
            let loop = characterArray[Math.floor(Math.random() * characterArray.length)];
            passArray.push(loop);
        }

        if (passArray.length !== 0) {
            console.log(passArray)
            setPassword(passArray.join(""));
            setShowPass(true);
        } else {
            setShowPass(true);
        }
    }

    return (
        <Button onClick={(e) => generatePassword(e)} size="lg" variant="success">
            Generate Password
        </Button>
    )
}
