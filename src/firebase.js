import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxzHimEzwpGS9YkPRXqZMgmd0yMc58zaQ",
    authDomain: "netflix-clone-ad14f.firebaseapp.com",
    projectId: "netflix-clone-ad14f",
    storageBucket: "netflix-clone-ad14f.appspot.com",
    messagingSenderId: "973284709797",
    appId: "1:973284709797:web:d3199840e290d210de444c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth,createUserWithEmailAndPassword ,signInWithEmailAndPassword };
export default db;