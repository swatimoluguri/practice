


// Calculator.js
import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator) => {
    setInput((prevInput) => prevInput + operator);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleEquals = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button className="equals" onClick={handleEquals}>
          =
        </button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;


