import React from 'react';

function CalculatorButtons() {
  return (
    <div>
      <div>
        <button type="button" className="AC left">AC</button>
        <button type="button" className="+/- left">+/-</button>
        <button type="button" className="% left">%</button>
        <button type="button" className="/ right">&#247;</button>
      </div>
      <div>
        <button type="button" className="7 left">7</button>
        <button type="button" className="8 left">8</button>
        <button type="button" className="9 left">9</button>
        <button type="button" className="* right">&#215;</button>
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
        <button type="button" className="0 left">0</button>
        <button type="button" className=". left">.</button>
        <button type="button" className="= right">=</button>
      </div>
    </div>
  );
}
export default CalculatorButtons;
