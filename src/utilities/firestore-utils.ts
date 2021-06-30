import firebase from "firebase/app";
import "firebase/firestore";
import { firestoreDatabase } from "../services/firestore";

type userProps = {
  login: string;
  id: number;
  html_url: string;
  name: string | undefined;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
};

export const createFirestoreUser = async ({
  login,
  id,
  html_url,
  name,
  public_repos,
  public_gists,
  followers,
  following,
  created_at,
}: userProps) => {
  return firestoreDatabase
    .collection("ghUsers")
    .add({
      date_added_to_fs: firebase.firestore.FieldValue.serverTimestamp(),
      login,
      id,
      html_url,
      name,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
    });
};

export const streamFirestoreUsers = (watcher: {}) => {
  return firestoreDatabase
    .collection("ghUsers")
    .orderBy("date_added_to_fs")
    .onSnapshot(watcher);
};
