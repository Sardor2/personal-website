import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyB-rdI3mXZdBFS1SrkGFfCNxtis4feW3OE",
  authDomain: "sardor-db.firebaseapp.com",
  projectId: "sardor-db",
  storageBucket: "sardor-db.appspot.com",
  messagingSenderId: "544068816836",
  appId: "1:544068816836:web:dfcb18f2ad7511a0e19e91",
  measurementId: "G-MBE8879NM2"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

// export const getUsers = async () => {
//   const userRef = firestore.collection('users');
//   const userSnapshot = await userRef.get();
//   const cartRef = firestore.collection(`users/${userSnapshot.docs[0].id}/cartItems`);
//   const cartSnapshot = await cartRef.get();
//   console.log(cartSnapshot.docs[0].data());
//   if (!userSnapshot.empty) {
//     console.log(userSnapshot.docs[0].data())
//   } else {
//     console.log('error')
//   }
// }

export const addColletionsAndDocuments = async (collectionName,objectsToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  console.log(objectsToAdd)
  const batch = firestore.batch();
  
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef,objectsToAdd);

  return await batch.commit();
}

export const fetchAboutData = async () => {
  const aboutRef = firestore.collection('about-me');
  const aboutSnapshot = await aboutRef.get();
  let result = aboutSnapshot.docs[0].data();
  return result;
}

export default firebase;