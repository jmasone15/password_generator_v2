import React from 'react';
import lowerLetters from "../characters/lower";
import upperLetters from "../characters/upper";
import numberCharacters from "../characters/number";
import specialCharacters from "../characters/special";

export default function DisplayCard({ password, setPassword, showPass, setShowPass, options }) {

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

        setPassword(passArray.join(""));
        setShowPass(true);
    }

    return (
        <div>
            {showPass === true && (
                <p>Your Password: {password}</p>
            )}
            {showPass === false && (
                <p>Click the button to generate a new password</p>
            )}
            <button onClick={(e) => generatePassword(e)}>Generate</button>
        </div>
    )
}
