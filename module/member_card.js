import {
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "./firebase/firebase_config.js";

/* GET QUERY */
try {
  /* get "id" parameter from url */
  const url_str = window.location.href;
  const url = new URL(url_str);
  const id = url.searchParams.get("id");

  /* make a select query */
  var q = await doc(db, "team", id);

  /* request a query */
  var querySnapshot = await getDoc(q);

  /* return with parsed data with html template */
  if (querySnapshot.exists()) {
    let mem_info_row = querySnapshot.data();
    let name = mem_info_row["name"];
    let tmi = mem_info_row["tmi"];
    let mbti = mem_info_row["mbti"];
    let strength = mem_info_row["strength"];
    let work_style = mem_info_row["work_style"];
    let blog_url = mem_info_row["blog_url"];
    let image_url = " ";

    let temp_html = `<div class="card-body p-0">
                    <div class="d-flex align-items-center mb-4">
                      <div class="p-5">
                        <h2 class="fw-bolder">NAME : ${name}</h2>
                        <p>
                        MBTI : ${mbti}
                        </p>
                        <p>
                        STRENGTH : ${strength}
                        </p>
                        <p>
                        WORK STYLE : ${work_style}
                        </p>
                        <p>
                        BLOG URL : ${blog_url}
                        </p>
                        <p>
                        TMI : ${tmi}
                        </p>
                      </div>
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/300x400/343a40/6c757d"
                        alt="..."
                      />
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="d-flex justify-content-between">
                        <!-- link to ./member_modify.html -->
                        <a
                          class="btn btn-primary mx-2 px-4 py-3 hoverButton"
                          href="#!"
                        >
                          <div
                            class="d-inline-block bi bi-pencil-square me-0"
                          ></div>
                        </a>
                        <!-- link to ./member_delete.html -->
                        <a
                          class="btn btn-primary mx-2 px-4 py-3 hoverButton"
                          href="#!"
                        >
                          <div class="d-inline-block bi bi-trash3 me-0"></div>
                        </a>
                      </div>
                    </div>
                  </div>`;
    $("#card-container").append(temp_html);
  }
} catch (e) {
  console.log(e);
}
