import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEwkL1mxrB_8D06zbGSVPSbmizB17-5N8",
  authDomain: "tmpro-7f5bd.firebaseapp.com",
  databaseURL: "https://tmpro-7f5bd-default-rtdb.firebaseio.com",
  projectId: "tmpro-7f5bd",
  storageBucket: "tmpro-7f5bd.appspot.com",
  messagingSenderId: "429987218954",
  appId: "1:429987218954:web:e73f4e4169e6a9784741f3",
  measurementId: "G-MNLGV7NTE3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);