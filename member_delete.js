import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase/firebase_config.js";

$("#delete").click(async function () {
    alert('삭제되었습니다.')
    window.location.reload();
  });

/*DELETE QUERY*/

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
    capital: deleteField()
});