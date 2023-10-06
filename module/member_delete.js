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

$("#deleteBtn").click(async function () {
  // v9에 설명하는 대로 형식을 (데베, 컬렉션, 문서) 로 바꿔보자
  // const deleteMember = await deleteDoc(doc(db, "albums", "name")); - name자리 id값 찾기

//   const memberDelete = doc(db, 'albums', "XTEIC603qwtN5MIbsRxW");
//   console.log(memberDelete);
// // Remove the 'capital' field from the document
//   const member = await updateDoc(memberDelete, {
//     capital: deleteField(member)

//   })
  // location.href = "team_main.html"
  alert('삭제되었습니다.')

})