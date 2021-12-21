// JavaScript source code

$(function () {
    $(".index-btn").click(function () {
        $(".active").removeClass("active");
        let indexNumber = $(".index-btn").index($(this));
        $(".slide").eq(indexNumber).addClass("active");
    });

});