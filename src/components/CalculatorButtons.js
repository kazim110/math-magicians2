import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButtons({ clickHandeler }) {
  return (
    <div className="keypad">
      <div>
        <button type="button" name="AC" className="left" onClick={() => clickHandeler('AC')}>AC</button>
        <button type="button" name="+/-" className="left" onClick={() => clickHandeler('+/-')}>+/-</button>
        <button type="button" name="%" className="left" onClick={() => clickHandeler('%')}>%</button>
        <button type="button" name="÷" className="divisioin right" onClick={() => clickHandeler('÷')}>÷</button>
      </div>
      <div>
        <button type="button" name="7" className="left" onClick={() => clickHandeler('7')}>7</button>
        <button type="button" name="8" className="left" onClick={() => clickHandeler('8')}>8</button>
        <button type="button" name="9" className="left" onClick={() => clickHandeler('9')}>9</button>
        <button type="button" name="x" className="right" onClick={() => clickHandeler('x')}>x</button>
      </div>
      <div>
        <button type="button" name="4" className="left" onClick={() => clickHandeler('4')}>4</button>
        <button type="button" name="5" className="left" onClick={() => clickHandeler('5')}>5</button>
        <button type="button" name="6" className="left" onClick={() => clickHandeler('6')}>6</button>
        <button type="button" name="-" className="right" onClick={() => clickHandeler('-')}>-</button>
      </div>
      <div>
        <button type="button" name="1" className="left" onClick={() => clickHandeler('1')}>1</button>
        <button type="button" name="2" className="left" onClick={() => clickHandeler('2')}>2</button>
        <button type="button" name="3" className="left" onClick={() => clickHandeler('3')}>3</button>
        <button type="button" name="+" className="right" onClick={() => clickHandeler('+')}>+</button>
      </div>
      <div>
        <button type="button" name="0" className="zero left" onClick={() => clickHandeler('0')}>0</button>
        <button type="button" name="." className="left" onClick={() => clickHandeler('.')}>.</button>
        <button type="button" name="=" className="right" onClick={() => clickHandeler('=')}>=</button>
      </div>
    </div>
  );
}
CalculatorButtons.propTypes = {
  clickHandeler: PropTypes.func.isRequired,
};

export default CalculatorButtons;
