import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBks8H9WEfUUZgsf2HJ8jTRoCZ3R4vq6eo",
    authDomain: "outreach-austin-db.firebaseapp.com",
    databaseURL: "https://outreach-austin-db.firebaseio.com",
    storageBucket: "outreach-austin-db.appspot.com"
  

  });

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;