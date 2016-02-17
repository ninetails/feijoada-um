import React from 'react';

import {removeTodo} from 'actions/TodoActions';

const TodoItem = ({todo, id, dispatch}) => (
  <div className='view'>
    <label>{todo.get('text')}</label>
    {' '}
    <button className='destroy' onClick={(e) => {
      e.preventDefault();
      return dispatch(removeTodo(id));
    }}>x</button>
  </div>
);

export default TodoItem;
