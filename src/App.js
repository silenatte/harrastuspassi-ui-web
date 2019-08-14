import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import HobbyListView from './components/views/HobbyListView';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={HobbyListView} />
      </Router>
    </Provider>
  );
};

export default App;
