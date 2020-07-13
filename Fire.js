import * as firebase from 'firebase';
import '@firebase/firestore';
import Login from '../Components/Login'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

    var firebaseConfig = {
        apiKey: "AIzaSyDiFcBSLU70ksWv7bxffLsBoCInSGqxB44",
        authDomain: "moviesapp-cb136.firebaseapp.com",
        databaseURL: "https://moviesapp-cb136.firebaseio.com",
        projectId: "moviesapp-cb136",
        storageBucket: "moviesapp-cb136.appspot.com",
        messagingSenderId: "625058329773",
        appId: "1:625058329773:web:1ffdfbd3864ac4196cc224",
        measurementId: "G-RT0JRH5DH2"
    };
    firebase.initializeApp(firebaseConfig);
    
