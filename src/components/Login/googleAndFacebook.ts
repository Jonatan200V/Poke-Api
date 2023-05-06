import { authFirebase } from "@/services/firebase";
import { UserRegister } from "@/store/reducer/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  User,
  // browserLocalPersistence,
  // setPersistence,
  signInWithPopup,
} from "firebase/auth";
// import { viewError } from "@/store/reducer/error";
// import firebase, { FirebaseError } from "firebase/app";
const providerFacebook = new FacebookAuthProvider();
const providerGoogle = new GoogleAuthProvider();

export const registerUser = (user: User) => {
  const userStore: UserRegister = {
    id: user.uid,
    name: user.displayName !== null ? user.displayName : "",
    photo: user.photoURL !== null ? user.photoURL : "",
    email: user.email !== null ? user.email : "",
  };
  return userStore;
};
export const Facebook = "FacebbokUser";
export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(authFirebase, providerFacebook);
    const user = result.user;
    const userStore: UserRegister = registerUser(user);
    // window.localStorage.setItem(Facebook, JSON.stringify(userStore));
    return userStore;
  } catch (error) {
    // console.log(error);
  }
};
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(authFirebase, providerGoogle);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    // if (!credential) throw new Error();
    // const token = credential.accessToken;
    const userStore: UserRegister = registerUser(user);
    return userStore;
  } catch (error) {
    // const errors = error as FirebaseError;
    // return errors
    // dispatch(viewError(errors.message));
  }
};
export const signInGoogleStore = createAsyncThunk(
  "User/signInGoogleStore",
  singInWithGoogle,
);
export const signInFacebookStore = createAsyncThunk(
  "User/signInGoogleStore",
  signInWithFacebook,
);
