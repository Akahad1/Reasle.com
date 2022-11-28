// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
  
  apiKey: "AIzaSyC-LIkCIUtDC2utLkrUQHTfjoBGfvw0yK8",
  authDomain: "resale-e8c4e.firebaseapp.com",
  projectId: "resale-e8c4e",
  storageBucket: "resale-e8c4e.appspot.com",
  messagingSenderId: "619179743701",
  appId: "1:619179743701:web:ae096b2eaaf109b83b055c",
  measurementId: "G-1LYXJC4SVE"
};
console.log(process.env.REACT_APP_authDomain,process.env.REACT_APP_storageBucket,process.env.REACT_APP_projectId,process.env.REACT_APP_measurementId)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;