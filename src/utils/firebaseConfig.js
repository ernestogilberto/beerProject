import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5Eyr5zM9EfBtFGJULnxV14yHnsJHwQiM',
  authDomain: 'beerproject-2691c.firebaseapp.com',
  projectId: 'beerproject-2691c',
  storageBucket: 'beerproject-2691c.appspot.com',
  messagingSenderId: '442148894710',
  appId: '1:442148894710:web:ebb78429145045c38039d7'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;