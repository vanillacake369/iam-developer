import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";

// 수정버튼클릭시 alert 이후 팀페이지 이동
$("#updateBtn").click(async function () {
    alert("수정되었습니다.")
    location.href ="teamMain.html"
})

$("#esc").click(async function() {
    history.back();
})