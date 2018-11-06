import React,{Component} from 'react'
import firebase from 'firebase'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import RouterComponent from './src/RouterComponent'
import reducers from './src/reducers'

class App extends Component{
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyD7YS9tve6wQfQWS9HOHaUVglCRNQXVLEo",
      authDomain: "manager-d1bdd.firebaseapp.com",
      databaseURL: "https://manager-d1bdd.firebaseio.com",
      projectId: "manager-d1bdd",
      storageBucket: "manager-d1bdd.appspot.com",
      messagingSenderId: "777244689566"
    };
    firebase.initializeApp(config);
  }
  render(){
    return(
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <RouterComponent/>
      </Provider>
    )
  }
}

export default App;