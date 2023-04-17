
function toggleMenu() {
    let linkDiv = document.getElementById("mobile-link");
    let menuDiv = document.getElementById("menu");

    if (linkDiv.style.display == "block") {
        linkDiv.style.display = "none";
        menuDiv.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else {
        linkDiv.style.display = "block";
        menuDiv.innerHTML = `<i class="fa fa-times" id="close-icon"></i>`;
        let closeTag = document.getElementById("close-icon");
        closeTag.style.background = "#e9f6e9dc";
        closeTag.style.width = "20px";
        closeTag.style.height = "20px";
        closeTag.style.border = "1px solid #eee";
        closeTag.style.borderRadius = "50%";
        closeTag.style.padding = "5px";
        closeTag.style.color = "black";
        closeTag.style.textAlign = "center";
    }
}