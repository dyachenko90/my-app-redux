import React, { useState } from 'react';
import { addTodo } from '../store/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

const Form = () => {

  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false
    }
    dispatch(addTodo(todo));
    setTodoValue('');
  }

  return (
    <div>
      <h2><i>React - Redux Toolkit</i></h2>
      <form className='wrapForm' onSubmit={e => e.preventDefault()}>
        <input value={todoValue} type="text" onChange={e => setTodoValue(e.target.value)}/>
        <button type='submit' onClick={() => addTodoHandler()}>Submit</button>
      </form>
    </div>
  )
}

export default Form