import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";


// 페이지 로드 후 기존 데이터 받기
$("#updatePageBtn").click(async function () {
  location.href = "member_update.html"


});




// 정보수정 후 버튼 클릭 시
$("#updateBtn").click(async function () {
  // receive data
  // const name = $("#u_name").val();
  // const mbti = $("#u_mbti").val();
  // const strength = $("#u_strength").val();
  // const work_style = $("#u_workStyle").val();
  // const blog_url = $("#u_blogUri").val();
  // const tmi = $("#u_tmi").val();

  // const memberUpdate = await addDoc(collection(db, "memberUpdate"), {
    
  //   name: name,
  //   mbti: mbti,
  //   strength: strength,
  //   work_style: work_style,
  //   blog_url: blog_url,
  //   tmi: tmi,
    
  // });
  
  console.log("수정되었습니다.");
});

