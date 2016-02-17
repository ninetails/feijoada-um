import Immutable from 'immutable';
import createReducer from 'lib/createReducer';

const initialState = Immutable.fromJS({
  todos: [
    { text: 'Initial Todo', isCompleted: false }
  ],
  toggleAllcompleted: true
});

export default createReducer(initialState, {
  ['ADD_TODO'](state, { text }) {
    const item = Immutable.fromJS({
      text: text,
      isCompleted: false
    });

    return state.update('todos', (todos) => todos.push(item));
  },
  ['REMOVE_TODO']: (state, { id }) => state.deleteIn(['todos', id])
});
