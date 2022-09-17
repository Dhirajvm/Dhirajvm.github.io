//navigation css change on scroll
$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background-color', '#232323');
            } else {
                $('.navbar-default').css('background-color', 'transparent');
            }
        });
    }
});
//fadein elements with class post
jQuery('.post').addClass("hiddenb").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
});
// owl slider
$("#owl-demo").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 1,
    itemsDesktop: [200, 1],
    itemsDesktopSmall: [979, 3]
});
// owl slider2
$("#owl-demo2").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [200, 1],
    itemsDesktopSmall: [979, 3]
});