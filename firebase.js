import { getAuth ... }
import { initializeApp ... }

const firebaseConfig = {...}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

<script type="module">
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getDatabase,
  ref,
  get,
  set
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUtA25o7-msDMiWOxtW21FTVJM_fQoRc0",
  authDomain: "planner-751c1.firebaseapp.com",
  databaseURL: "https://planner-751c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planner-751c1",
  storageBucket: "planner-751c1.firebasestorage.app",
  messagingSenderId: "324667244818",
  appId: "1:324667244818:web:d1116c357fac5cc58d33cb"
};

const app = initializeApp(firebaseConfig);
  
const db = getDatabase(app);
const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOutUser = signOut;
window.onAuthStateChangedUser = onAuthStateChanged;
window.db = db;
window.fbRef = ref;
window.fbGet = get;
window.fbSet = set;

console.log("FIREBASE OK");

</script>
window.auth = auth;
window.db = db;
window.fbRef = ref;
window.fbGet = get;
window.fbSet = set;
window.createUserWithEmailAndPassword =
createUserWithEmailAndPassword;
window.signInWithEmailAndPassword =
signInWithEmailAndPassword;
window.signOutUser = signOut;
window.onAuthStateChangedUser =
onAuthStateChanged;
