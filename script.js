document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".link");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            link.style.transform = "scale(0.97)";

            setTimeout(function () {
                link.style.transform = "";
            }, 150);

        });

    });

});