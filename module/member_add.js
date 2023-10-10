import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  ref,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "./firebase/firebase_config.js";
import { getSearchParameters } from "./url_parser.js";
import { isValidInput } from "./input_verfier.js";

const key = ["name", "mbti", "strength", "work_style", "blog_url", "tmi"];

/* INSERT QUERY */
var addMember = async function () {
  try {
    /* Make Member Entity {key : value} from  inputs(O) ~~GET request~~(X) */
    var member = {
      name: $("#name").val(),
      strength: $("#strength").val(),
      work_style: $("#work_style").val(),
      blog_url: $("#blog_url").val(),
      mbti: $("#mbti").val(),
      tmi: $("#tmi").val(),
    };
    var imgFile = document.getElementById("input_img").files[0];

    /* Verification on input data */
    if (isValidInput(key, member) === true && imgFile) {
      const memberAdded = await addDoc(collection(db, "team"), member);

      console.log("Document written with ID : ", memberAdded.id);

      /* Save Image name of "User ID", into Firebase Storage */
      var storageRef = ref(storage, "users/" + memberAdded.id);

      var uploadMemberImg = uploadBytesResumable(storageRef, imgFile);

      alert("멤버 생성 완료");

      window.location.replace("../view/member_card.html?id=" + memberAdded.id);
    } else {
      throw new Error("모든 멤버 정보가 입력되지 않았습니다.");
    }
  } catch (e) {
    alert("모든 멤버 정보가 입력되지 않았습니다.");
    console.error(e);
  }
};

/* Preview of Input Image file */
var loadFile = function (event) {
  var output = document.getElementById("member_img");

  if (event.target.files && event.target.files[0]) {
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  }
};

/* Add Event Listener */
document.addEventListener("DOMContentLoaded", init, false);
function init() {
  /* "Preview" */
  const inputElement = document.getElementById("input_img");
  inputElement.addEventListener("change", (event) => {
    loadFile(event);
  });
  /* "Submit" */
  const submit = document.getElementById("submitBtn");
  submit.addEventListener("click", () => {
    addMember();
  });
}
