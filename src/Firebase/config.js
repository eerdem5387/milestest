import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpZFsNUW03sEBUOS1YmHaA8j9Y4b1Yq84",
    authDomain: "globalmiles-3aa64.firebaseapp.com",
    projectId: "globalmiles-3aa64",
    storageBucket: "globalmiles-3aa64.appspot.com",
    messagingSenderId: "210292088122",
    appId: "1:210292088122:web:0b7627e370ed0e7d72c403"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };