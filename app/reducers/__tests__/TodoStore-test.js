import 'babel-core/polyfill';
import { expect } from 'chai';

import * as TodoActions from 'actions/TodoActions';

import { bindActionCreators } from 'redux';
import createStore from 'lib/createStore';

const mockTodo = (text, isCompleted = false) => {
  text,
  isCompleted
};

describe('Todo Store', () => {
  let store, initialTodo, todoActions;

  beforeEach(() => {
    store = createStore();
    todoActions = bindActionCreators(TodoActions, store.dispatch);

    initialTodo = mockTodo('Initial Todo');
  });

  const todoState = (prop) => store.getState().TodoStore.get(prop);

  it('should add todo', () => {
    todoActions.add('mock todo');

    const expectedTodos = [
      initialTodo,
      mockTodo('mock todo')
    ];

    expect(todoState('todos').toJS()).to.eql(expectedTodos);
  });
});
