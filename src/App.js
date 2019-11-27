import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import HobbyCreateView from './components/views/HobbyCreateView';
import HobbyListView from './components/views/HobbyListView';
import TopBar from './components/blocks/TopBar';
import HobbyEditView from './components/views/HobbyEditView';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopBar />
        <Route path="/hobbies/new" component={HobbyCreateView} />
        <Route path="/" exact component={HobbyListView} />
        <Route path="/hobbies/edit/:id" exact component={HobbyEditView} />
      </Router>
    </Provider>
  );
};

export default App;
