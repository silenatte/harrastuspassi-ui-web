import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import HobbyCreateView from './components/views/HobbyCreateView';
import HobbyListView from './components/views/HobbyListView';
import TopBar from './components/blocks/TopBar';
import HobbyEditView from './components/views/HobbyEditView';
import PromotionListView from './components/views/PromotionListView';
import PromotionEditView from './components/views/PromotionEditView';
import { PromotionCreateView } from './components/views/PromotionCreateView';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopBar />
        <Route path="/hobbies/new" component={HobbyCreateView} />
        <Route path="/" exact component={HobbyListView} />
        <Route path="/hobbies/edit/:id" exact component={HobbyEditView} />
        <Route path="/promotions" exact component={PromotionListView} />
        <Route path="/promotions/edit/:id" exact component={PromotionEditView} />
        <Route path="/promotions/new" exact component={PromotionCreateView} />
      </Router>
    </Provider>
  );
};

export default App;
