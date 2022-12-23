const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else {
        nav.removeAttribute("style");
    }
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $("#mynav").addClass("scrolled");
    } else {
        $("#mynav").removeClass("scrolled");
    }
});



// for scroll to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $(".scrollup").fadeIn();
    } else {
        $(".scrollup").fadeOut();
    }
});
$(".scrollup").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 600
    );
    return false;


});