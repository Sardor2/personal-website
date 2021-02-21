import firebase from 'firebase/app';
import 'firebase/firestore';
import { Icons } from "../data/services-icons";

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

export const fetchServiceData = async () => {
  const serviceRef = firestore.collection('service-data');
  const serviceSnapshot = await serviceRef.get();
  let result = serviceSnapshot.docs[0].data();
  return Object.values(result)[0]
}

export const modifyServiceData = (data) => {
  const newUpdatedData = data.map(item => {
    const {title} = item;
    return {
      ...item,
      icon: Icons[title.toLowerCase().replace(/ /g, '-')]
    }
  })
  return newUpdatedData;
}

export default firebase;