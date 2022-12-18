import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo} from '../store/todoSlice';


const TodoItem = ({todo}) => {

  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState('');

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id))
  }

  const toogleHandler = (id) => {
    dispatch(toggleTodo(id))
  }

  const saveTodo = (id, text) => {
      const todo = {
        id,
        text,
        completed: false
      }
      dispatch(editTodo(todo));
      setChange('');
      setEdit(false);
    }
  

  const onEdit = (id, text) => {
    if (id) {
      setEdit(true);
      setChange(text);
    }
  }

  return (
    <div>
      <div className='todoButtons'>
          { edit ? null : 
          ( <>
          <div style={todo.completed ? { textDecorationLine: 'line-through'}: { color: 'black'}}>{todo.text}</div>
          <button style={{background: 'yellow', color: 'black'}} onClick={() => onEdit(todo.id, todo.text)}>Edit</button>
          <button style={{background: 'green', color: 'white'}} onClick={() => toogleHandler(todo.id)}>Complete</button>
          <button style={{background: 'red', color: 'white'}} onClick={() => deleteHandler(todo.id)}>Delete</button>
          </>)}

          { edit ? ( 
            <div className='changeForm'>
              <input value={change} onChange={e => setChange(e.target.value)}/>
              <button type="submit" onClick={() => saveTodo(todo.id, change)}>Save</button> 
            </div>) : null
          }
      </div>
    </div>
  )
}

export default TodoItem