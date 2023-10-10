// Firebase SDK 라이브러리 가져오기
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "./firebase/firebase_config.js";

/* SELECT ALL MEMBERS */
let docs = await getDocs(collection(db, "team"));
/* FOR EACH MEMBERS */
docs.forEach(async (doc) => {
  let row = doc.data();
  let docsId = doc.id;
  let name = row["name"];
  let mbti = row["mbti"];
  let tmi = row["tmi"];

  /* Access to storage ref */
  const storageRef = ref(storage, "users/" + docsId);
  let image_url;
  try {
    image_url = await getDownloadURL(storageRef);
  } catch (err) {
    image_url = "https://dummyimage.com/300x400/343a40/6c757d";
  }

  console.log(image_url);

  let temp_html = `
  <div class="col">
    <div class="card" style="width: 18rem" id="membercard-${docsId}">
      <img src="${image_url}" class="card-img-top" width="300" height"400" alt="..."/>
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
