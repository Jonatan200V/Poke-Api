import {
  //  Facebook,
  registerUser,
} from "@/components/Login/googleAndFacebook";
import { authFirebase } from "@/services/firebase";
import { useAppDispatch } from "@/store/hooks";
import { loginUser } from "@/store/reducer/user";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { useEffect } from "react";

export default function usePersistSesion() {
  const dispatch = useAppDispatch();
  // const sesionFacebook = window.localStorage.getItem(Facebook);
  useEffect(() => {
    const signIn = async () => {
      // if (sesionFacebook) {
      //   const user = JSON.parse(sesionFacebook);
      //   dispatch(loginUser(user));
      // }
      await setPersistence(authFirebase, browserLocalPersistence);
      if (authFirebase.currentUser) {
        // console.log(authFirebase.currentUser);
        const user = registerUser(authFirebase.currentUser);
        dispatch(loginUser(user));
      }
    };
    signIn();
  }, []);
}
