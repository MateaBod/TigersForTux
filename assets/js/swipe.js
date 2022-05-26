$(window).ready(function () {
    $(".sidenav").swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers) {
            if (phase == "move" && direction == "right") {
                $(".sidenav").addClass("open-sidebar");
                $(".bur").addClass("vis");
                $(".burOrange").addClass("vis");
                $(".bookmark").addClass("vis");
                $(".bookmarkOrange").addClass("vis");
                $(".gotop").addClass("vis");
                $(".gotopOrange").addClass("vis");
                $(".swipe").addClass("vis");
                return false;
            }
            if (phase == "move" && direction == "left") {
                $(".sidenav").removeClass("open-sidebar");
                $(".bur").removeClass("vis");
                $(".burOrange").removeClass("vis");
                $(".bookmark").removeClass("vis");
                $(".bookmarkOrange").removeClass("vis");
                $(".gotopOrange").removeClass("vis");
                $(".swipe").removeClass("vis");
                return false;
            }
        }
    });
});