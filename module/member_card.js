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

/* GET QUERY */
try {
  const q = query(collection(db, "team"), where("name", "==", "jihoon"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let mem_info_row = doc.data();
    console.log(doc.id, " => ", mem_info_row);
    let name = mem_info_row["name"];
    let tmi = mem_info_row["tmi"];
    let strength = mem_info_row["strength"];
    let work_style = mem_info_row["work_style"];
    let blog_url = mem_info_row["blog_url"];

    console.log(name);
    console.log(tmi);
    console.log(strength);
    console.log(work_style);
    console.log(blog_url);

    let temp_html = `<div class="card-body p-0">
                  <div class="d-flex align-items-center mb-4">
                    <div class="p-5">
                      <h2 class="fw-bolder">${name}</h2>
                      <p>
                      ${tmi}
                      </p>
                      <p>
                      ${strength}
                      </p>
                      <p>
                      ${work_style}
                      </p>
                      <p>
                      ${blog_url}
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
  });
} catch (e) {
  console.log(e);
}
