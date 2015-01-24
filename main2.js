$(document).ready(function() {

  var $img1 = $('.img1');
  var $img2 =$('.img2');
  var $img3=$('.img3');
  var $backbutton = $(".backbutton");

 $("article").click(function (event) {
   event.preventDefault();

    var relatedClass = "." + $(this).attr('rel');  // .post1 or .post2 or .post3

  $(this).closest("article").siblings().addClass("hide");
  $(this).css({"width": "99%"});
   //$(this).closest("li").addClass("active");
   $(this).find("img").css({"display": "inline-block"});
   $(this).find("li").css({"display": "inline-block"})
   $("aside").addClass("active");
   //$(this).find("img").show();    THIS WORKS

//    $(relatedClass).siblings().removeClass("active");$("")
//    $(relatedClass).addClass('active');
    //console.log(relatedClass);




 $("img").click(function (event) {
   event.preventDefault();
   $(this).addClass("big");
   //$(this).closest("li").siblings("li").addClass("hide");
   //$(this).closest("img").siblings("img").addClass("hide");
   //$(this).parent().parent().siblings().css({"display": "none"});
  // $(this).parent().hide();
   $(this).parent().siblings().addClass("hide");
  $(".backbutton").css({"display": "block"});
   //$(".backbutton").addClass("active");

   //$(this).closest(".img2").css({"display": "none"});
   //$(".img3").css({"display": "none"});
   //$(".img3").addClass("hide");
});

$(".backbutton").click(function(event) {
  event.preventDefault();
  $("img").removeClass("big");
  $("a").removeClass("hide");


});




});

});

//$Album1.click(function (event){
//  event.preventDefault();
  //console.log(this);
  //  $(this).closest("img").children().addClass("active");
  //  $('.Album1').children().addClass("active");
//  $(this).closest("article").siblings().addClass("hide");
  //$(this).addClass("active");
  //$(this).parent().addClass("hide");
  //$(this).closest("a").siblings("a").addClass("hide");
  //$(this).next().addClass("active");


  //$(this).closest("img").children().("active");
  //$(this).children("img").addClass("active");
  //$(".activeNav").addClass("active");




//});
