var slideIndex = 0;

showSlides();

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    // Проверяем, передан ли параметр n
    if (n === undefined) {
        slideIndex++;
    } else {
        slideIndex = n;
    }

    // Показываем текущий слайд
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}