import React, { useState } from 'react';

function PredictionPage() {
    const [inputData, setInputData] = useState('');
    const [predictionResult, setPredictionResult] = useState('');

    const predict = () => {
        if (!Number.isInteger(parseInt(inputData))) {
            alert("Please enter a valid integer.");
            return;
        }

        const requestData = { data: parseInt(inputData) };

        fetch('/predict', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            setPredictionResult("Prediction: " + data.prediction);
            console(predictionResult)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>AI Prediction</h1>
            <input
                type="number"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter an integer for prediction"
            />
            <button onClick={predict}>Predict</button>
            <p>{predictionResult}</p>
        </div>
    );
}

export default PredictionPage;