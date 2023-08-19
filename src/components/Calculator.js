import React, { useState } from 'react';
import CalculatorButtons from './CalculatorButtons';
import './css/Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [isResultDisplyed, setIsResulDispleyed] = useState(false);
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandeler = (buttonName) => {
    if (isResultDisplyed && !['+', '-', '*', '/'].includes(buttonName)) {
      setCalculatorState({
        total: calculatorState.next,
        next: buttonName,
        operation: null,
      });
      setIsResulDispleyed(false);
    } else {
      setCalculatorState((prevState) => calculate(prevState, buttonName));
    }
  };
  return (
    <>
      <h2 className="calcTitle">Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="result-box" onChange={calculate}>{calculatorState.next || calculatorState.total || '0'}</div>
        <CalculatorButtons clickHandeler={clickHandeler} />
      </div>
    </>
  );
}

export default Calculator;
