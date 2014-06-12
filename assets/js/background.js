(function($) {
    "use strict";

    function animate(element, speed) {
        var left = parseInt(element.css("left"));
        var sp = speed || 1;
        left = left - sp;
        element.css({
            left: left
        });
    }

    var cloud1 = setInterval(function() {
        animate($(".cloud1"), 2);
    }, 50);

    var cloud2 = setInterval(function() {
        animate($(".cloud2"), 0.5);
    }, 50);

    var cloud3 = setInterval(function() {
        animate($(".cloud3"));
    }, 50);

}(jQuery));