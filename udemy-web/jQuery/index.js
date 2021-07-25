$("button").click(function(){
    $("h1").css("color", "green")
})
$(document).keypress(function(event){
    $("h1").text(event.key)
})
$("h1").mouseover(function(){
    $("h1").css("color", "purple")
})
$("button").on("click", function(){
    $("h1").animate({opacity:0.1});
})