import {collection, doc, getDoc, getDocs, query, where} from 'firebase/firestore';
import db from './firebaseConfig';

async function fetchData(category) {
  let q
  category ? q = query(collection(db, 'beers'), where('category', '==', category)) : q = collection(db, 'beers')

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id, ...doc.data()
  }));
}

export const getBeerById = async (id) => {
  const docSnap = await getDoc(doc(db, 'beers', id));
  return {
    id: id,
    ...docSnap.data()
  }
}

export default fetchData;