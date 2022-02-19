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
  getDownloadURL,
  collection,
  addDoc,
} from "../firebase-config";

import db from "../firebase-config";

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
  console.log(payload.timestamp);
  return (dispatch) => {
    if (payload.image != "") {
      // Create referece
      const storageRef = ref(storage, `images/${payload.image.name}`);

      // Upload the file
      // const uploadTask = uploadBytesResumable(storageRef, payload.image).then(
      //   (snapshot) => {
      //     console.log("Uploaded a file");
      //   }
      // );

      const uploadTask = uploadBytesResumable(storageRef, payload.image);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        async () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          const rdl = await getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL) => {
              console.log("File available at", downloadURL);
              // Add download URL to payload
              payload.downloadURL = downloadURL;
            }
          );

          console.log("RDL object: " + rdl);

          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, "articles"), {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: payload.downloadURL,
            comments: 0,
            description: payload.description,
          });
          console.log("Document written with ID: ", docRef.id);
        }
      );
    }
  };
}
