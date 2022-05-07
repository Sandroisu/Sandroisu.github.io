

function showReadMore() {
    const readMore = document.getElementById("readMore");
    const blogContainer = document.getElementById("blogContainer");
    const blogTopText = document.getElementById("blogTopText");
    const blogBottomText = document.getElementById("blogBottomText");
    readMore.classList.remove("read_more_badge_close");
    readMore.classList.add("read_more_badge_open")
    blogTopText.classList.add("blog_top_up")
    blogBottomText.classList.add("blog_bottom_down")
    blogContainer.addEventListener('mouseout', function(e) {
        readMore.classList.add("read_more_badge_close");
        readMore.classList.remove("read_more_badge_open")
        blogTopText.classList.remove("blog_top_up")
        blogBottomText.classList.remove("blog_bottom_down")
    });
}
