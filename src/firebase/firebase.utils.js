import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBE40aqJnrM5QrVbQx70p64pd1JsIDizEU",
  authDomain: "crown-db-11872.firebaseapp.com",
  databaseURL: "https://crown-db-11872.firebaseio.com",
  projectId: "crown-db-11872",
  storageBucket: "crown-db-11872.appspot.com",
  messagingSenderId: "800918249646",
  appId: "1:800918249646:web:6bcc90bca3d3ef9813cd3f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;