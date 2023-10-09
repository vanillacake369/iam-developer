// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { key } from "./firebase_key.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: key.apiKey,
  authDomain: key.authDomain,
  projectId: key.projectId,
  storageBucket: key.storageBucket,
  messagingSenderId: key.messagingSenderId,
  appId: key.appId,
  measurementId: key.measurementId,
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
