import React, { useState } from 'react';
import InputNumber from 'react-input-number';

export default function OptionsCard({ setOptions }) {

    const [length, setLength] = useState(5);
    const [lower, setLower] = useState("true");
    const [upper, setUpper] = useState("true");
    const [number, setNumber] = useState("true");
    const [special, setSpecial] = useState("true");

    const saveOptions = (e) => {
        e.preventDefault();
        setOptions({
            length: length,
            lower: lower,
            upper: upper,
            number: number,
            special: special
        });
        console.log(length, lower, upper, number, special)
    }

    return (
        <form onSubmit={(e) => saveOptions(e)}>
            <div>
                <p><u>Length</u></p>
                <InputNumber
                    min={5}
                    max={100}
                    step={1}
                    value={length}
                    onChange={setLength}
                />
            </div>

            <br />

            <div>
                <p><u>Lowercase Letters</u></p>
                <label htmlFor="lowercase">Yes:</label>
                <input type="radio" name="lowercase" value="true" onClick={(e) => setLower(e.target.value)} />

                <label htmlFor="lowercase">No:</label>
                <input type="radio" name="lowercase" value="false" onClick={(e) => setLower(e.target.value)} />
            </div>

            <br />

            <div>
                <p><u>Uppercase Letters</u></p>
                <label htmlFor="uppercase">Yes:</label>
                <input name="uppercase" type="radio" value="true" onClick={(e) => setUpper(e.target.value)} />

                <label htmlFor="uppercase">No:</label>
                <input name="uppercase" type="radio" value="false" onClick={(e) => setUpper(e.target.value)} />
            </div>

            <br />

            <div>
                <p><u>Numbers</u></p>
                <label htmlFor="number">Yes:</label>
                <input name="number" type="radio" value="true" onClick={(e) => setNumber(e.target.value)} />

                <label htmlFor="number">No:</label>
                <input name="number" type="radio" value="false" onClick={(e) => setNumber(e.target.value)} />
            </div>

            <br />

            <div>
                <p><u>Special Characters</u></p>
                <label htmlFor="special">Yes:</label>
                <input name="special" type="radio" value="true" onClick={(e) => setSpecial(e.target.value)} />

                <label htmlFor="special">Yes:</label>
                <input name="special" type="radio" value="false" onClick={(e) => setSpecial(e.target.value)} />

            </div>

            <br />

            <div>
                <button type="submit">Save Options</button>
            </div>
        </form>
    )
}
