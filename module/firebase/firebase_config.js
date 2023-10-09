// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqawipQY7PqRA7NMRL76E7pOi5dtIRk5Q",
  authDomain: "iam-dev-623b3.firebaseapp.com",
  projectId: "iam-dev-623b3",
  storageBucket: "iam-dev-623b3.appspot.com",
  messagingSenderId: "145871608299",
  appId: "1:145871608299:web:9925c338c21f80c66261ae",
  measurementId: "G-W79BXK25S1",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
