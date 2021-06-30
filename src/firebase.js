import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBkg2ia5YsW-HpdtZlAqG34SfLaTufFhg",
    authDomain: "react-site-template-v1.firebaseapp.com",
    projectId: "react-site-template-v1",
    storageBucket: "react-site-template-v1.appspot.com",
    messagingSenderId: "845051445057",
    appId: "1:845051445057:web:e050f083dda35b9a05ebc0",
    measurementId: "G-QRH4Y675DQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export default firebaseApp;
export { db, auth };
