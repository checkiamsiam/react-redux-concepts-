import './App.css';
import Buttons from './Components/Buttons';
import CounterDiv from './Components/CounterDiv';

function App() {
  return (
    <div className="App">
      <h1>Counter app with redux logic</h1>
      <CounterDiv/>
      <Buttons/>
    </div>
  );
}

export default App;
