import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword ,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDH1lnUzhMXFCl_EIu-NBVrtlUvPpJ6k5Q",
    authDomain: "off-topic-999f5.firebaseapp.com",
    projectId: "off-topic-999f5",
    storageBucket: "off-topic-999f5.appspot.com",
    messagingSenderId: "544209940403",
    appId: "1:544209940403:web:bdc512f44500c63277a5c6",
    measurementId: "G-CQNJ71FFC5"
  };


  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInwithGooglePopup =  () =>  signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);


    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const dcoRef = doc(collectionRef, object.name.toLowerCase());
        batch.set(dcoRef, object);
    });

    await batch.commit();
}

export const submitFeedback = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const docRef = doc(collectionRef, objectsToAdd.name);

    try {
        return await setDoc(docRef, objectsToAdd)
    } catch(error) {
        console.log(error);
    }

}

export const getTopicsAndDocuments = async () => {
    const collectionRef = collection(db, 'topics');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    var topics = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
    return  topics;

}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userSnapshot;
};

export const createAuthUserWithEmailAndPassowrd = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassowrd = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });
}
