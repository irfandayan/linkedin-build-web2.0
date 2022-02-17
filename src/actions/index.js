import { auth, provider, signInWithPopup } from "../firebase-config";

export function singInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
}
