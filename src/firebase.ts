// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPsQ8WpDNmleNtdriuxYub4m-DW7n6YWs",
  authDomain: "resume-builder-8174a.firebaseapp.com",
  projectId: "resume-builder-8174a",
  storageBucket: "resume-builder-8174a.firebasestorage.app",
  messagingSenderId: "797507908146",
  appId: "1:797507908146:web:02d842d0e156888057822b",
  measurementId: "G-KWHLJ8J12K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;