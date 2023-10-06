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
import { db } from "./firebase/firebase_config.js";

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
});
