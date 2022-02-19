import {
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "../firebase-config";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function singInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // console.log(result);
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  console.log("i was here");
  return (dispatch) => {
    if (payload.image != "") {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      uploadBytesResumable(storageRef, payload.image).then((snapshot) => {
        console.log("Uploaded a file");
      });
    }
  };
}
