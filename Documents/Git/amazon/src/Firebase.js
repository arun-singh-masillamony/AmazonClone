// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqZ28aZeoSZG22LcXuNHOM6jOCbkQ2X0w",
  authDomain: "clone-1a3f3.firebaseapp.com",
  projectId: "clone-1a3f3",
  storageBucket: "clone-1a3f3.appspot.com",
  messagingSenderId: "588071170140",
  appId: "1:588071170140:web:49c340bd9717e114dfb699",
  measurementId: "G-LBMDHS807J"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db, auth};
