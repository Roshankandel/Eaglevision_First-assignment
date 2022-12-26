$(document).ready(function () {


    $(".nav-toggler").click(function () {
        $(".nav-toggler").toggleClass("active");
    });

    $(".nav-toggler").click(function () {
        $(".nav_items").toggleClass("nav_open");
        $("ul li").toggleClass("nav_items_open");
        $("#mynav").toggleClass("nav_open_active");
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $("#mynav").addClass("scrolled");
        } else {
            $("#mynav").removeClass("scrolled");
        }
    });


    //scroll down btn in hero section

    $("#downClick").on("click", function () {
        $("html,body").animate({
            scrollTop: 550
        });
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
});