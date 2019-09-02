import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import HobbyCreateView from './components/views/HobbyCreateView';
import HobbyListView from './components/views/HobbyListView';
import TopBar from './components/blocks/TopBar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopBar />
        <Route path="/hobbies/new" component={HobbyCreateView} />
        <Route path="/" exact component={HobbyListView} />
      </Router>
    </Provider>
  );
};

export default App;
