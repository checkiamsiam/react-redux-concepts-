import './App.css';
import Buttons from './Components/Buttons';
import CounterDiv from './Components/CounterDiv';
import { useSelector, useDispatch } from 'react-redux'
import fetchTodoData from './StateManagement/Actions/todoFetchActions';
import { useEffect } from 'react';

function App() {
  const {todo , isLoading } = useSelector((state) => state.fetchTodoReducer)
  const dispatch = useDispatch()
  console.log(todo);
 useEffect(()=> {
  dispatch(fetchTodoData())
 } , [])
  return (
    <div className="App">
      <h1>Counter app with redux logic</h1>
      <CounterDiv />
      <Buttons />
      <div>
        {isLoading && <h1>Loading...</h1>}
        {todo && todo.map((data) => <h1>{data.title}</h1>)}
      </div>
    </div>
  );
}

export default App;
