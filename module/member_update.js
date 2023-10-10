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

try {

  /* make a select query */
  const url_str = window.location.href;
  const url = new URL(url_str);
  const id = url.searchParams.get("id");

  var q = await doc(db, "team", id);
  console.log(q)
  /* request a query */
  var querySnapshot = await getDoc(q);
  console.log(querySnapshot)
  let mem_info_row = querySnapshot.data();
  console.log(mem_info_row)

  let name = mem_info_row["name"];
  let tmi = mem_info_row["tmi"];
  let mbti = mem_info_row["mbti"];
  let strength = mem_info_row["strength"];
  let work_style = mem_info_row["work_style"];
  let blog_url = mem_info_row["blog_url"];
  let image_url = mem_info_row["image_url"];

  let temp_html = `
      <div class="d-flex align-items-center mb-4">
      <div class="p-5" id="card-content" style="width:450px">
        <h2 class="fw-bolder">Member Name 1</h2>
        <div>
          <!-- 카드 내용 -->
          <div class="form-floating mb-2">
            <input type="TEXT" class="form-control" id="u_name" placeholder="NAME" value="${name}">
            <label for="floatingInput">NAME</label>
          </div>
          <div class="form-floating mb-2">
            <input type="TEXT" class="form-control" id="u_mbti" placeholder="MBTI" value="${mbti}">
            <label for="floatingPassword">MBTI</label>
          </div>
          <div class="form-floating mb-2">
            <input type="TEXT" class="form-control" id="u_strength" placeholder="STRENGTH" value="${strength}">
            <label for="floatingInput">STRENGTH</label>
          </div>
          <div class="form-floating mb-2">
            <input type="TEXT" class="form-control" id="u_workStyle" placeholder="WORK_STYLE" value="${work_style}">
            <label for="floatingPassword">WORK_STYLE</label>
          </div>
          <div class="form-floating mb-2">
            <input type="EMAIL" class="form-control" id="u_blogUrl" placeholder="BLOG_URI" value="${blog_url}">
            <label for="floatingPassword">BLOG_URI</label>
          </div>
          <div class="form-floating mb-2">
            <input type="TEXT" class="form-control" id="u_tmi" placeholder="TMI" value="${tmi}">
            <label for="floatingPassword">TMI</label>
          </div>
        </div>
      </div>
      <img
        class="img-fluid"
        src="https://dummyimage.com/300x400/343a40/6c757d"
        alt="..."
        value="${image_url}"
      />
    </div>
    <div class="d-flex justify-content-end mb-4"
    >
      <div class="d-flex justify-content-between"
      >
        <!-- link to ./member_modify.html -->
        <a
          class="btn btn-primary mx-2 px-4 py-3 hoverButton"
          id="updateBtn"
        >
          <div
            class="d-inline-block bi bi-pencil-square me-0"
          ></div>
        </a>
      </div>
    </div>
  `
  $("#updateContent").append(temp_html);
} catch (error) {
  console.log(error)
}

  // // file
  // dirtyValues = {}; // 더티한 값

  // /*
  // dirtyValues = {
  //     name : "일지훈",
  //     img : "지훈18.png",
  //     ,,,
  // };
  // dirtyValues["name"] => "임지훈"
  // */

  // // img
  // var originalFormData = $('#img_mem').serialize();
  // function checkFormChanged() {
  //   if (originalFormData !== $('#img_mem').serialize()) {
  //     //it's dirty!
  //     dirtyValues["img_mem"] = $('#img_mem').val();
  //     console.log(dirtyValues);
  //   }
  // }
  // // name
  // var originalFormData = $('#u_name').serialize();
  // function checkFormChanged() {
  //   if (originalFormData !== $('#u_name').serialize()) {
  //     //it's dirty!
  //     dirtyValues["u_name"] = $('#u_name').val();
  //   }
  // }
  // // mbti
  // var originalFormData = $('#mbti').serialize();
  // function checkFormChanged() {
  //   if (originalFormData !== $('#mbti').serialize()) {
  //     //it's dirty!
  //     dirtyValues["mbti"] = $('#u_mbti').val();
  //   }
  // }
  // // strength
  // var originalFormData = $('#strength').serialize();
  // function checkFormChanged() {
  //   if (originalFormData !== $('#strength').serialize()) {
  //     //it's dirty!
  //     dirtyValues["strength"] = $('#u_strength').val();
  //   }
  // }
  // // work_style
  // var originalFormData = $('#work_style').serialize();
  // function checkFormChanged() {
  //   if (originalFormData !== $('#work_style').serialize()) {
  //     //it's dirty!
  //     dirtyValues["work_style"] = $('#u_workStyle').val();
  //   }
  // }
  // // tmi
  // var originalFormData = $('#tmi').serialize();
  // function checkFormChanged() {
  //   if (originalFormData !== $('#tmi').serialize()) {
  //     //it's dirty!
  //     dirtyValues["tmi"] = $('#u_tmi').val();
  //   }
  // }
  // //
  // function checkFormChanged() {
  //   if (originalFormData !== $('#blog_uri').serialize()) {
  //     //it's dirty!
  //     dirtyValues["blog_uri"] = $('#u_blogUri').val();
  //   }
  // }

  // docId를 사용해서 dirtyValues 객체 안에 있는 키값을 통해서 더티한 값만 변경
  // dirtyValues.key[0].foreach(() => {
  //   // 더티한 값 update
  //   dirtyValues = {
  //     name: u_name,
  //     mbti: u_mbti,
  //     strength: u_strength,
  //     work_style: u_workStyle,
  //     tmi: u_tmi,
  //     blog_uri: u_blogUri
  //   }
  //   console.log(dirtyValues);
  // });
  // 클릭 시 ID값 받아오기
  // const url_str = window.location.href;
  // const url = new URL(url_str);
  // const id = url.searchParams.get("id");

  // console.log("id : " + id);

// 정보수정 버튼 클릭 시
$("#updateBtn").click(async function () {
  // setDoc
  // 1. 해당컬렉션에서 id값을 가진 도큐먼트값을 데이터로 수정
  // 2. 이미 도큐먼트가 존재하면 수정
  // 3. 없으면 새로 추가
  // 4. merge값이 true이면 데이터가 없다면 추가, 있다면 update처럼 작용

  const url_str = window.location.href;
  const url = new URL(url_str);
  const id = url.searchParams.get("id");
  const team = doc(db, 'team', id);

  let name = $('#u_name').val();
  let mbti = $('#u_mbti').val();
  let strength = $('#u_strength').val();
  let work_style = $('#u_workStyle').val();
  let blog_url = $('#u_blogUrl').val();
  let tmi = $('#u_tmi').val();
  
  await setDoc(team, {
    name: name,
    mbti: mbti,
    strength: strength,
    work_style: work_style,
    blog_url: blog_url,
    tmi: tmi
  }, { merge: true });

  const MemberUpdate = doc(db, "team", id);

  console.log(MemberUpdate)

  alert("수정되었습니다.");
  location.href = "team_main.html";
});

