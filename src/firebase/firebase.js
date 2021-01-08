import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDSSAkYM24QEzltbRyyVdfX7Ga4eekyJ6w",
    authDomain: "test-shop-2544c.firebaseapp.com",
    databaseURL: "https://test-shop-2544c-default-rtdb.firebaseio.com",
    projectId: "test-shop-2544c",
    storageBucket: "test-shop-2544c.appspot.com",
    messagingSenderId: "7000726560",
    appId: "1:7000726560:web:0bae940f006ffa556eb045"
};
let fire = firebase.initializeApp(firebaseConfig)

export default fire;