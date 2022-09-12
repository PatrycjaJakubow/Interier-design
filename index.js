

var images = ["bedroom3.jpg", "livingroom3.jpg"];
$(function() {
    var i = 0;
    $(".tlo1").css("background-image", "url(images/"+images[i]+")");
    setInterval(function() {
        i++;
        if(i === images.length) {
            i = 0;
        }
        $(".tlo1").fadeOut(500, function() {
            $(this).css("background-image", "url(images/"+images[i]+")");
            $(this).fadeIn(500);
        });
    }, 5000);
});
