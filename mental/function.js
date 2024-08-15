document.addEventListener("DOMContentLoaded", function () {
    var splashScreen = document.getElementById("splashScreen");
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollButton = document.querySelector(".scrollButton a");


    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");

    setTimeout(function () {
        text1.classList.add("opacity-100");
        setTimeout(function () {
            text1.classList.remove("opacity-100");
        }, 2000);

        setTimeout(function () {
            text2.classList.add("opacity-100");
        }, 4000);
        setTimeout(function () {
            text2.classList.remove("opacity-100");
        }, 6000);

        setTimeout(function () {
            text3.classList.add("opacity-100");
        }, 8000);

        setTimeout(function () {
            splashScreen.style.top = '-100vh'
        }, 10000);
    }, 1500);

    if (scrollButton) {
        scrollButton.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                scrollContainer.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    } 

});