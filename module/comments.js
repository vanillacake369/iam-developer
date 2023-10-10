// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { key } from "./firebase/firebase_key.js";

// Firebase 인스턴스 초기화
const app = initializeApp(key);
const db = getFirestore(app);
//방명록 입력값 firebase 저장
$("#comment_save").click(async function () {
  let nickname = $("#nickname").val();
  let comment_text = $("#comment_text").val();

  let doc = {
    nickname: nickname,
    comment_text: comment_text,
  };
  await addDoc(collection(db, "comments"), doc);
  alert("저장 완료!");
  window.location.reload();
});
//firebase값 불러오기
let docs = await getDocs(collection(db, "comments"));
docs.forEach((doc) => {
  let data = doc.data();

  let nickname = data.nickname;
  let comment_text = data.comment_text;

  let temp_html = `
            <p>
                ${nickname} : ${comment_text}
                </p>
           `;
  $("#comment_box").append(temp_html);
});
