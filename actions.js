

function showReadMore() {
    const readMore = document.getElementById("readMore");
    const blogContainer = document.getElementById("blogContainer");
    readMore.classList.remove("read_more_badge_close");
    readMore.classList.add("read_more_badge_open")
    blogContainer.addEventListener('mouseout', function(e) {
        readMore.classList.add("read_more_badge_close");
        readMore.classList.remove("read_more_badge_open")
    });
}
