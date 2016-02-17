import React from 'react';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoList = ({todos, dispatch}) => (
  <ul className='todo-list'>
    {todos.map((todo, idx) => (
      <li key={idx}>
        <TodoItem dispatch={dispatch} id={idx} todo={todo}/>
      </li>
    ))}
  </ul>
);

export default TodoList;
