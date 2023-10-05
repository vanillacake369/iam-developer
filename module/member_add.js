import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";

/* GET QUERY */

try {
  const team = collection(db, "team");
  const docs = await getDocs(team);
  // const docs = await getDocs(collection(db, "member"));
  docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);

    let name = row["#name"];
    let tmi = row["#tmi"];
    let mbti = row["#mbti"];
    let strength = row["#strength"];

    let temp_html = `
      <div class="col">
          <div class="card h-100">
          <img
              src="${name}"
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <h5 class="card-tmi">${tmi}</h5>
              <p class="card-text">${strength}</p>
          </div>
          <div class="card-footer">
              <small class="text-muted">${mbti}</small>
          </div>
          </div>
      </div>
      `;
    $("#card").append(temp_html);
  });
} catch (e) {
  console.log(e);
}

/* INSERT QUERY */
$("#postingbtn").click(async function () {
  // receive data
  const image = $("#image").val();
  const title = $("#title").val();
  const date = $("#date").val();
  const info = $("#info").val();
  const received_data = {
    album_image: image,
    album_title: title,
    album_date: date,
    album_info: info,
  };
  // insert query
  try {
    await addDoc(collection(db, "albums"), { received_data });
  } catch (e) {
    console.log("error occurred");
    console.log(e);
  }

  // alert to user
  alert("INSERT COMPLETED");

  // reload
  window.location.reload();
});

/* GET AIR CONDITION FROM OPEN API */
let url =
  "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let firstLowGu = data["RealtimeCityAir"]["row"][0];
    let firstLowGuMiseVal = firstLowGu["IDEX_MVL"];
    let conditionByMiseVal;
    if (firstLowGuMiseVal >= 70) {
      conditionByMiseVal = "<span>수치가 높아요</span>";
    } else {
      conditionByMiseVal = "<span>정상이예요</span>";
    }

    $("#mise").append(conditionByMiseVal);
  });

function openClose() {
  //   alert("안녕");
  console.log($("#postbox"));
  $("#postbox").toggle();
}

function insertInfo() {
  let image = $("#image").val();
  let title = $("#title").val();
  let date = $("#date").val();
  let info = $("#info").val();

  let temp_html = `
    <div class="col">
        <div class="card h-100">
        <img
            src="${image}"
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${info}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">${date}</small>
        </div>
        </div>
    </div>
    `;
  $("#card").append(temp_html);
}
