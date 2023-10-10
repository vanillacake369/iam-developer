$("comment_save").click(async function () {
    let nickname = $('#nickname').val();
    let comment_text = $('comment_text').val();

    let doc2 = {
        'nickname': nickname,
        'comment_text': comment_text
    };
    await addDoc(collection(db, "comments"), doc2);
    alert('저장 완료!');
    window.location.reload();
})

let docs2 = getDocs(collection(db, "comments"));
docs2.forEach((doc) => {
    let row = doc2.data();

    let nickname = row['nickname'];
    let comment_text = row['comment_text'];

    let temp_html2 = `
            <div class="col">
                ${nickname} : ${comment_text}
                </div>
           `;
    $('#card').append(temp_html2);
});