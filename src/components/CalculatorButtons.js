import React from 'react';

function CalculatorButtons() {
  return (
    <div className="keypad">
      <div>
        <button type="button" className="AC left">AC</button>
        <button type="button" className="+/- left">+/-</button>
        <button type="button" className="% left">%</button>
        <button type="button" className="/ right">&#247;</button>
      </div>
      <div>
        <button type="button" className="seven left">7</button>
        <button type="button" className="eight left">8</button>
        <button type="button" className="nine left">9</button>
        <button type="button" className="multiply right">&#215;</button>
      </div>
      <div>
        <button type="button" className="4 left">4</button>
        <button type="button" className="5 left">5</button>
        <button type="button" className="6 left">6</button>
        <button type="button" className="- right">-</button>
      </div>
      <div>
        <button type="button" className="1 left">1</button>
        <button type="button" className="2 left">2</button>
        <button type="button" className="3 left">3</button>
        <button type="button" className="+ right">+</button>
      </div>
      <div>
        <button type="button" className="zero left">0</button>
        <button type="button" className=". left">.</button>
        <button type="button" className="= right">=</button>
      </div>
    </div>
  );
}
export default CalculatorButtons;
