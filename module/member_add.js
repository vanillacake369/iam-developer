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
    let name = mem_info_row["#name"];
    let tmi = mem_info_row["#tmi"];
    let strength = mem_info_row["#strength"];
    let work_style = mem_info_row["#work_style"];
    let blog_url = mem_info_row["#blog_url"];

    let temp_html = `<div class="card-body p-0">
                  <div class="d-flex align-items-center mb-4">
                    <div class="p-5">
                      <h2 class="fw-bolder">Member Name 1</h2>
                      <p>
                      </p>
                      <p>
                      </p>
                      <p>
                      </p>
                      <p>
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

// /* INSERT QUERY */
// $("#postingbtn").click(async function () {
//   // receive data
//   const image = $("#image").val();
//   const title = $("#title").val();
//   const date = $("#date").val();
//   const info = $("#info").val();
//   const received_data = {
//     album_image: image,
//     album_title: title,
//     album_date: date,
//     album_info: info,
//   };
//   // insert query
//   try {
//     await addDoc(collection(db, "albums"), { received_data });
//   } catch (e) {
//     console.log("error occurred");
//     console.log(e);
//   }

//   // alert to user
//   alert("INSERT COMPLETED");

//   // reload
//   window.location.reload();
// });

// /* GET AIR CONDITION FROM OPEN API */
// let url =
//   "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     let firstLowGu = data["RealtimeCityAir"]["row"][0];
//     let firstLowGuMiseVal = firstLowGu["IDEX_MVL"];
//     let conditionByMiseVal;
//     if (firstLowGuMiseVal >= 70) {
//       conditionByMiseVal = "<span>수치가 높아요</span>";
//     } else {
//       conditionByMiseVal = "<span>정상이예요</span>";
//     }

//     $("#mise").append(conditionByMiseVal);
//   });

// function openClose() {
//   //   alert("안녕");
//   console.log($("#postbox"));
//   $("#postbox").toggle();
// }

// function insertInfo() {
//   let image = $("#image").val();
//   let title = $("#title").val();
//   let date = $("#date").val();
//   let info = $("#info").val();

//   let temp_html = `
//     <div class="col">
//         <div class="card h-100">
//         <img
//             src="${image}"
//             class="card-img-top"
//             alt="..."
//         />
//         <div class="card-body">
//             <h5 class="card-title">${title}</h5>
//             <p class="card-text">${info}</p>
//         </div>
//         <div class="card-footer">
//             <small class="text-muted">${date}</small>
//         </div>
//         </div>
//     </div>
//     `;
//   $("#card").append(temp_html);
// }
