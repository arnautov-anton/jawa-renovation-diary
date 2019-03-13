$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 50 //<-- heigth of a navbar in pixels
            }, 1500);
        }

    });

    //navbar toggler - toggles is-active class when in mobile mode
    $("#toggle-bars").click(function() {
        $(".menu").toggleClass("is-hidden");
    });
});
