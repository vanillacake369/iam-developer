// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { key } from "../firebase/firebase_key.js";

// Firebase 인스턴스 초기화
const app = initializeApp(key);
const db = getFirestore(app);

let docs = await getDocs(collection(db, "team"));
docs.forEach((doc) => {
  let row = doc.data();
  let docsId = doc.id;

  let image = row["image"];
  let name = row["name"];
  let mbti = row["mbti"];
  let tmi = row["tmi"];

  let temp_html = `
  <div class="col">
    <div class="card" style="width: 18rem" id="membercard-${docsId}">
      <img src="${image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" id="name">${name}</h5>
        <div class="card-container">
          <div class="card-text" id="mbti">${mbti}</div>
          <div class="card-text" id="tmi">${tmi}</div>
        </div>
      </div>
    </div>
  </div>`;
  $("#create").append(temp_html);

  console.log(docsId);

  // 각 카드에 클릭 이벤트 핸들러 추가
  $(`#membercard-${docsId}`).click(function () {
    // 원하는 문서 ID
    const desiredDocId = docsId;

    // 문서 ID를 URL에 추가하여 새로운 페이지로 이동
    const url = `member_card.html?id=${desiredDocId}`;
    window.location.href = url;

    // 현재 페이지의 URL에서 쿼리 문자열을 가져오기
    const queryString = window.location.search;

    // URL 매개변수에서 문서 ID 추출
    const urlParams = new URLSearchParams(queryString);
    const docId = urlParams.get("id");

    console.log(docId);
  });
});
