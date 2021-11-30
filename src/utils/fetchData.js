import {collection, getDocs} from 'firebase/firestore';
import db from './firebaseConfig';

async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "beers"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id, ...doc.data()
  }));
}

export default fetchData;