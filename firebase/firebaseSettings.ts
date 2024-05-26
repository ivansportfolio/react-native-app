import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDweXZ5v233G6yXSb2jVWzyCR94jaQlMQg',
  authDomain: 'react-native-app-db690.firebaseapp.com',
  projectId: 'react-native-app-db690',
  storageBucket: 'react-native-app-db690.appspot.com',
  messagingSenderId: '377200013692',
  appId: '1:377200013692:web:6415b328a1f3a9574c34f9',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timeStamp };
