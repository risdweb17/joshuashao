$(document).on('keydown keyup', function (e) {
    console.log(e.keyCode);
    
    if (e.keyCode == 16) {
       $(".nom").toggleClass("customtype");
    }
});