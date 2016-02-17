import React from 'react';

import createStore from 'lib/createStore';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import TodoApp from 'components/TodoApp/TodoApp';

const store = createStore();

const MyTodoApp = connect(({TodoStore}) => ({TodoStore}))(TodoApp);

const App = () => (
  <Provider {...{ store }}>
    { () => <MyTodoApp/> }
  </Provider>
);

export default App;
