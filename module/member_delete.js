import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";

// deleteBtn 클릭 시 해당 id 삭제
$("#deleteBtn").click(async function () {
  const url_str = window.location.href;
  const url = new URL(url_str);
  const id = url.searchParams.get("id");

  // console.log("id : " + id)
  // v9에 설명하는 대로 형식을 (데베, 컬렉션, 문서) 로 바꿔보자
  await deleteDoc(doc(db, "team", id));

  alert("삭제되었습니다.");
  location.href = "team_main.html";
});

/**
 * id값에 따른 삭제
 * @vanillacake369 임지훈
 * @param {*} id
 */
export const deleteById = async function (id) {
  await deleteDoc(doc(db, "team", id));

  alert("삭제되었습니다.");
  location.href = "team_main.html";
};
