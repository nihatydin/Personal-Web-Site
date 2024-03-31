const more_btn = document.getElementById("more-btn");
const more_box = document.getElementById("more-box");

more_btn.addEventListener("click", () => {
  if (more_box.style.display === "none") {
    more_btn.innerHTML = '<i class="fa-solid fa-chevron-up pr-2"></i>See Less';
    more_box.style.display = "block";
  } else {
    more_btn.innerHTML =
      '<i class="fa-solid fa-chevron-down pr-2"></i>See More';
    more_box.style.display = "none";
  }
});
