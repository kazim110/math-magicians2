import Calculator from './components/Calculator';
import './components/css/Calculator.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <section className="container">
        <Quote />
        <Calculator />
      </section>
    </div>
  );
}

export default App;
