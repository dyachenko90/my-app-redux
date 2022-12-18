import './App.css';
import Posts from './components/Posts';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';


function App() {
  const todos = useSelector(state => state.todo.todos);
  return (
      <div className="App">
          <div className='todos'>
            <Form />
            {todos?.map(todo => (
              <TodoItem key={todo.id} todo={todo}/>
              ))
            }
          </div>
          <Posts />
      </div>
  );
}

export default App;
