import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYdkxfjPvrTXrVZ71zqDgJHkMPoDdiyFA",
  authDomain: "reactcoderhouse-48ec1.firebaseapp.com",
  databaseURL: "https://reactcoderhouse-48ec1-default-rtdb.firebaseio.com",
  projectId: "reactcoderhouse-48ec1",
  storageBucket: "reactcoderhouse-48ec1.appspot.com",
  messagingSenderId: "756814957529",
  appId: "1:756814957529:web:60199f0d615f17a9a467c8",
};

const app = initializeApp(firebaseConfig);

export default app;