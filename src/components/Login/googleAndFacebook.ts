import { authFirebase, db } from "@/services/firebase";
import { UserRegister } from "@/store/reducer/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  User,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

interface UserSearch {
  userStore: UserRegister;
  id: string;
}
const providerFacebook = new FacebookAuthProvider();
const providerGoogle = new GoogleAuthProvider();
export const userRef = collection(db, "users");

export const searchUser = async (email: string) => {
  const createQueryUser = await query(userRef, where("email", "==", email));
  const existUser = await getDocs(createQueryUser);
  return existUser;
};

export const registerUser = async (user: User): Promise<UserSearch> => {
  const userStore: UserRegister = {
    id: user.uid,
    name: user.displayName !== null ? user.displayName : "",
    photo: user.photoURL !== null ? user.photoURL : "",
    email: user.email !== null ? user.email : "",
    nivel: 1,
    exp: 0,
  };
  const existUser = await searchUser(userStore.email);
  if (existUser.docs.length === 0) {
    const user = await addDoc(collection(db, "users"), userStore);
    return { userStore, id: user.id };
  }
  userStore.nivel = existUser.docs[0].data().nivel;
  userStore.exp = existUser.docs[0].data().exp;
  const id = existUser.docs[0].id;
  return { userStore, id };
};
// export const Facebook = "FacebbokUser";
export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(authFirebase, providerFacebook);
    const user = result.user;
    const { userStore } = await registerUser(user);
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
    const { userStore } = await registerUser(user);
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
