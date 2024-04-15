import React, { useState } from 'react';

const TemperatureConverter: React.FC = () => {
    const [celsius, setCelsius] = useState<string>('');
    const [fahrenheit, setFahrenheit] = useState<string>('');

    const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCelsius(e.target.value);
    };

    const convertToCelsius = () => {
        const f = parseFloat(celsius);
        if (!isNaN(f)) {
            const c = (f - 32) * (5 / 9);
            setFahrenheit(c.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    return (
        <div>
            <h2>Temperature Converter</h2>
            <label>
                Celsius:
                <input type="number" value={celsius} onChange={handleCelsiusChange} />
            </label>
            <button onClick={convertToCelsius}>Convert to Fahrenheit</button>
            {fahrenheit && (
                <p>
                    Fahrenheit: <span>{fahrenheit}</span>
                </p>
            )}
        </div>
    );
};

export default TemperatureConverter;
