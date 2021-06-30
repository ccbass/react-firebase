import firebase from "firebase/app";
import "firebase/firestore";
import { firestoreDatabase } from "../services/firestore";


export const createFirestoreUser = (jsonData) => {
  const {
    login,
    id,
    url,
    name,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
  } = jsonData;

  return firestoreDatabase.collection("ghUsers").add({
    date_added_to_fs: firebase.firestore.FieldValue.serverTimestamp(),
    login,
    id,
    url,
    name,
    public_repos,
    public_gists,
    followers,
    following,
    created_at
  });
};

export const streamFirestoreUsers = (watcher) => {
  return firestoreDatabase
    .collection("ghUsers")
    .orderBy("date_added_to_fs")
    .onSnapshot(watcher);
};
