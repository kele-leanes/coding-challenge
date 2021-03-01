import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDM3g0jBks6ptO6KhNygbOsWK_f1P3bh2s',
  authDomain: 'fly01-8dddb.firebaseapp.com',
  projectId: 'fly01-8dddb',
  storageBucket: 'fly01-8dddb.appspot.com',
  messagingSenderId: '126251816802',
  appId: '1:126251816802:web:3e2649fc7a0234f79dfe3b',
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app().firestore();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
