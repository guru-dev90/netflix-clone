import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

//import seedDatabase from './seed';

const config = {
  apiKey: "AIzaSyAa4n_shvpUNe2HKBpm-GOemIqZOy1wRcI",
  authDomain: "netflix-project-5e0f1.firebaseapp.com",
  projectId: "netflix-project-5e0f1",
  storageBucket: "netflix-project-5e0f1.appspot.com",
  messagingSenderId: "266799737478",
  appId: "1:266799737478:web:6100dd05d3177f88e17f07"
};

const firebase = window.firebase.initializeApp(config);
//seedDatabase(firebase);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
