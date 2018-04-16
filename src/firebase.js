import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBks8H9WEfUUZgsf2HJ8jTRoCZ3R4vq6eo",
  authDomain: "outreach-austin-db.firebaseapp.com",
  databaseURL: "https://outreach-austin-db.firebaseio.com",
  projectId: "outreach-austin-db",
  storageBucket: "outreach-austin-db.appspot.com",
  messagingSenderId: "876964770583"
};

firebase.initializeApp(config);

export const database = firebase.database().ref('/events');
export const auth = firebase.auth(); 
export const googleProvider = new firebase.auth.GoogleAuthProvider();