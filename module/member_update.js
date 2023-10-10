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
// storege
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
	uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "./firebase/firebase_config.js";
// 페이지 로드 후 기존 데이터 받기

try {

  /* make a select query */
  const url_str = window.location.href;
  const url = new URL(url_str);
  const id = url.searchParams.get("id");

  // 스토리지 참조값 만들기
  const storageRef = ref(storage, "users/" + id);
  

  let image_url;
  try {
    image_url = await getDownloadURL(storageRef);
  } catch (err) {
    image_url = "https://dummyimage.com/300x400/343a40/6c757d";
  }

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

  let temp_html = `
      <div class="d-flex align-items-center mb-4">
      <div class="p-5" id="card-content" style="width:450px">
        <h2 class="fw-bolder">Member Name 1</h2>
        <div>
          <!-- 카드 내용 -->
          <input type="file" accept="image/*" id="input_img" name="image" />
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
        src="${image_url}"
        alt="..."
        id="u_img"
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
  let img = $('#u_img').val();


  await setDoc(team, {
    name: name,
    mbti: mbti,
    strength: strength,
    work_style: work_style,
    blog_url: blog_url,
    tmi: tmi,
    img: img,
  }, { merge: true });

  const MemberUpdate = doc(db, "team", id);

  console.log(MemberUpdate)

  // 스토리지 참조값 만들기
  const storageRef = ref(storage, "users/" + id); 
  // 이미지 파일 가져오기
  const imgFile = document.getElementById("input_img").files[0];

  // 이미지 덮어씌우기
  const uploadTask = await uploadBytes(storageRef, imgFile);


  alert("수정되었습니다.");
  location.href = "team_main.html";




});

