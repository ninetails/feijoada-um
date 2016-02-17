import React from 'react';

import TodoList from 'components/TodoList/TodoList';

const TodoApp = ({TodoStore, dispatch}) => (
  <section className='todoapp'>
    <TodoList dispatch={dispatch} todos={TodoStore.get('todos')}/>
  </section>
);

export default TodoApp;
