$(document).ready(function() {


//our nav links
  var $Album1 = $('.Album1');
  var $img1 = $('.img1');
  var $img21 =$('.img21');
  var $img31=$('.img31');
  var $backbutton = $(".backbutton");
  var $Album2 = $('.Album2');
  var $img12 = $('.img12');
  var $img22 =$('.img22');
  var $img32=$('.img32');


$Album1.click(function (event){
  event.preventDefault();
//console.log(this);
//  $(this).closest("img").children().addClass("active");
//  $('.Album1').children().addClass("active");
  $(this).closest("div").siblings().addClass("hide");
  $(".img21").addClass("active");
  //$(this).parent().addClass("hide");
  $(".img31").addClass("active");

  //$(this).closest("img").children().("active");
 //$(this).children("img").addClass("active");
 $(".menu").addClass("active");

//  $('.Album1').siblings().addClass("hide");

$img1.click(function(event){
  event.preventDefault();

  $(this).addClass("big");
  //$(this).closest("img").siblings().addClass("hide");
  $(this).closest("a").siblings("a").addClass("hide");
  //$(".img1").siblings().removeClass("active");
  $(".backbutton").addClass("active");

  //$(".img2").removeClass("active");
  //$(".img3").removeClass("active");
//  $(".img2").addClass("hide");
  //$(".img3").addClass("hide");

});

$img21.click(function(event){
  event.preventDefault();

  $(this).addClass("big");
  $(this).closest("a").siblings("a").addClass("hide");
  $(".backbutton").addClass("active");
});

$img31.click(function(event){
  event.preventDefault();

  $(this).addClass("big");
  $(this).closest("a").siblings("a").addClass("hide");
  $(".backbutton").addClass("active");

});
$backbutton.click(function(event){
  event.preventDefault();
  //$(this).closest("a").siblings("a").addClass("active");
  //$(".img21").addClass("active");
  //$(this).children("a").addClass("hide");
  $(".img1").removeClass("big");
  $(".img21").addClass("hide");
  $(".img31").addClass("hide");
  $(".Album1").removeClass("hide");

});



});

$Album2.click(function (event){
  event.preventDefault();
  //console.log(this);
  //  $(this).closest("img").children().addClass("active");
  //  $('.Album1').children().addClass("active");
  $(this).closest("div").siblings().addClass("hide");
  $(".img22").addClass("active");
  //$(this).parent().addClass("hide");
  $(".img32").addClass("active");

  //$(this).closest("img").children().("active");
  //$(this).children("img").addClass("active");
  $(".menu").addClass("active");

  //  $('.Album1').siblings().addClass("hide");

  $img12.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    //$(this).closest("img").siblings().addClass("hide");
    $(this).closest("a").siblings("a").addClass("hide");
    //$(".img1").siblings().removeClass("active");
    $(".backbutton").addClass("active");

    //$(".img2").removeClass("active");
    //$(".img3").removeClass("active");
    //  $(".img2").addClass("hide");
    //$(".img3").addClass("hide");

  });

  $img22.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");
  });

  $img32.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");

  });

});






});
