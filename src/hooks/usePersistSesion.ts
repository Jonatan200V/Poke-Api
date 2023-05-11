import {
  //  Facebook,
  registerUser,
} from "@/components/Login/googleAndFacebook";
import { authFirebase } from "@/services/firebase";
import { useAppDispatch } from "@/store/hooks";
import { getId, loginUser } from "@/store/reducer/user";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { useEffect } from "react";
import { redirectHome } from "@/components/Login/Left";
import { useRouter } from "next/navigation";

export default function usePersistSesion() {
  const router = useRouter();
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
        const { userStore, id } = await registerUser(authFirebase.currentUser);
        dispatch(loginUser(userStore));
        dispatch(getId(id));
        redirectHome(router);
      }
    };
    signIn();
  }, []);
}
