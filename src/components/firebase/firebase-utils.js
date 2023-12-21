// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC_7xuhRFQDmFDdZ2RninZa8TeYZTW-y8",
  authDomain: "ecommerce-52723.firebaseapp.com",
  projectId: "ecommerce-52723",
  storageBucket: "ecommerce-52723.appspot.com",
  messagingSenderId: "953586108661",
  appId: "1:953586108661:web:7232963df90964c3a1ddbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// adding google authentication with firebase
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const LoginWithGoogle = () => signInWithPopup(auth, googleProvider);

// adding data to firestore
export const db = getFirestore(app);

// check current user 
export const checkCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(auth, userAuth => {
      unSubscribe();
      resolve(userAuth);
    }, reject)
  })
}

// createUserProfileDocument
export const createUserProfileDoc = async (userAuthObj, additionalData) => {
  if (!userAuthObj) return;

  const querySnapShot = doc(db, `users/${userAuthObj.uid}`);
  const snapShotObj = await getDoc(querySnapShot);

  if (!snapShotObj.exists()) {
    const { displayName, email } = userAuthObj;
    const createdDate = new Date();

    try {
      await setDoc(doc(db, "users", `${userAuthObj.uid}`), {
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log(error, "error occured");
    }
  }

  return querySnapShot;
};

// convert collection to map
export function convertCollectionToMap(snapShot) {
  const transformedCollection = snapShot.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  })

  const SHOP_DATA = transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
  
  return SHOP_DATA;
}