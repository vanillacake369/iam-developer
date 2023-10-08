import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";

console.log(db);

/* INSERT QUERY */
$("#postingbtn").click(async function () {
  // receive data
  const image = $("#input_img").val();
  const name = $("#name").val();
  const strength = $("#strength").val();
  const work_style = $("#work_style").val();
  const blog_url = $("#blog_url").val();
  const tmi = $("#tmi").val();

  const memberAdded = await addDoc(collection(db, "team"), {
    name: name,
    image: image,
    strength: strength,
    work_style: work_style,
    blog_url: blog_url,
    tmi: tmi,
  });

  console.log("Document written with ID : ", memberAdded.id);

  alert("멤버 생성 완료");

  window.location.replace("../view/member_card.html?id=" + memberAdded.id);
});

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

const inputElement = document.getElementById("input_img");
inputElement.addEventListener("change", (event) => {
  loadFile(event);
});
