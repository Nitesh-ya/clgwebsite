let i = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slides[i].style.display = "block";
    i = (i + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 3000);