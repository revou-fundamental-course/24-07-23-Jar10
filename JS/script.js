let slideIndex = 0;
showSlide();

function showSlide() {
    let i;
    let slides = document.getElementsByClassName("wrap1");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlide, 4000);
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact");
    const thankYouMessage = document.getElementById("thankYou");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (form.checkValidity()) {
            // Form is valid, show the "Terima Kasih" message
            form.style.display = "none";
            thankYouMessage.style.display = "block";
        }
    });
});



