// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDVqsMRhz7sW_0xRvoxN9DG1iwTAIB4Fk",
  authDomain: "imageuploader-34acb.firebaseapp.com",
  projectId: "imageuploader-34acb",
  storageBucket: "imageuploader-34acb.appspot.com",
  messagingSenderId: "234998404851",
  appId: "1:234998404851:web:03812bcdcd94d62d574986",
  measurementId: "G-46Q24J32Y0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
