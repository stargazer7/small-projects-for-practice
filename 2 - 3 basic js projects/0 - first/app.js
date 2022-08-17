const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closedFace.addEventListener("click", function () {
  if (openFace.classList.contains("open")) {

    closedFace.classList.remove("active");
    openFace.classList.add("active");
  }
});

openFace.addEventListener("click", function() {
    if(openFace.classList.contains("active")) {
        openFace.classList.remove("active");
        closedFace.classList.add("active");
    }
})
