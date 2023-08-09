import React from 'react';
import CalculatorButtons from './CalculatorButtons';
import './css/Calculator.css';

function Calculator() {
  return (
    <div className="main">
      <div className="result-box">0</div>
      <CalculatorButtons />
    </div>
  );
}

export default Calculator;