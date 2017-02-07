import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAf4uhE07JYZwlOU0sXpG4fNl_Vw7Yisi4',
      authDomain: 'manager-66e3b.firebaseapp.com',
      databaseURL: 'https://manager-66e3b.firebaseio.com',
      storageBucket: 'manager-66e3b.appspot.com',
      messagingSenderId: '741307985981'
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
