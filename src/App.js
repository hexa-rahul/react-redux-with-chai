import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
