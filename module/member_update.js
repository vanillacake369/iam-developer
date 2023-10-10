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

  // 클릭 시 ID값 받아오기
  // const url_str = window.location.href;
  // const url = new URL(url_str);
  // const id = url.searchParams.get("id");

  // console.log("id : " + id)

});

// 정보수정 후 버튼 클릭 시
$("#updateBtn").click(async function () {
  //setDoc
  // 1. 해당컬렉션에서 id값을 가진 도큐먼트값을 데이터로 수정
  // 2. 이미 도큐먼트가 존재하면 수정
  // 3. 없으면 새로 추가
  // 4. merge값이 true이면 데이터가 없다면 추가, 있다면 update처럼 작용

  // const url_str = window.location.href;
  // const url = new URL(url_str);
  // const id = url.searchParams.get("id");

  const team = doc(db, 'team', 'member1');

  let name = $('#u_name').val();
  let mbti = $('#u_mbti').val();
  let strength = $('#u_strength').val();
  let work_style = $('#u_workStyle').val();
  let blog_uri = $('#u_blogUri').val();
  let tmi = $('#u_tmi').val();

  setDoc(team, { name: name,
                 mbti: mbti,
                 strength: strength,
                 work_style: work_style,
                 blog_uri: blog_uri,
                 tmi: tmi}, { merge: false });

  const MemberUpdate = doc(db, "team", "member1");
  
  console.log(MemberUpdate)
  
  alert("수정되었습니다.");

});

