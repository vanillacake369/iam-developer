import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";

// 페이지 로드 후 기존 데이터 받기
$("#updatePageBtn").click(async function () {
  location.href = "member_update.html"

  // 클릭 시 ID값 받아오기
  const url_str = window.location.href;
  const url = new URL(url_str);
  const id = url.searchParams.get("id");

  console.log("id : " + id)

  // 자리에 값 뿌려주기
  const temp_html = `
      <div class="form-floating mb-2">
        <input type="TEXT" class="form-control" id="u_name" placeholder="NAME">
        <label for="floatingInput">NAME</label>
      </div>
      <div class="form-floating mb-2">
        <input type="TEXT" class="form-control" id="u_mbti" placeholder="MBTI">
        <label for="floatingPassword">MBTI</label>
      </div>
      <div class="form-floating mb-2">
        <input type="TEXT" class="form-control" id="u_stength" placeholder="STRENGTH">
        <label for="floatingInput">STRENGTH</label>
      </div>
      <div class="form-floating mb-2">
        <input type="TEXT" class="form-control" id="u_workStyle" placeholder="WORK_STYLE">
        <label for="floatingPassword">WORK_STYLE</label>
      </div>
      <div class="form-floating mb-2">
        <input type="EMAIL" class="form-control" id="u_blogUri" placeholder="abd@nbcamp.com">
        <label for="floatingPassword">BLOG_URI</label>
      </div>
      <div class="form-floating mb-2">
        <input type="TEXT" class="form-control" id="u_tmi" placeholder="TMI">
        <label for="floatingPassword">TMI</label>
      </div>
  `


});

// 정보수정 후 버튼 클릭 시
$("#updateBtn").click(async function () {

  // // 데이터 입력 값
  // const name = $("#u_name").val();
  // const mbti = $("#u_mbti").val();
  // const strength = $("#u_strength").val();
  // const work_style = $("#u_workStyle").val();
  // const blog_url = $("#u_blogUri").val();
  // const tmi = $("#u_tmi").val();

  // console.log(name);
  // console.log(mbti);
  // console.log(strength);
  // console.log(work_style);
  // console.log(blog_url);
  // console.log(tmi);
 
  // update query
  const frankDocRef = db.collection("team").doc("ATytFZE4ixmSeZn4m3mg");
  frankDocRef.set({
    name: name,
    mbti: mbti,
    strength: strength,
    work_style: work_style,
    blog_url: blog_url,
    tmi: tmi
  });

  // To update age and favorite color:
  db.collection("team").doc("ATytFZE4ixmSeZn4m3mg").update({
    name: name,
    mbti: mbti,
    strength: strength,
    work_style: work_style,
    blog_url: blog_url,
    tmi: tmi
  })
    .then(function () {
      console.log("Document successfully updated!");
    });

  // const memberUpdate = await addDoc(collection(db, "team"), {
  //   name: name,
  //   mbti: mbti,
  //   strength: strength,
  //   work_style: work_style,
  //   blog_url: blog_url,
  //   tmi: tmi,

  // });
  console.log("수정되었습니다.");

});

