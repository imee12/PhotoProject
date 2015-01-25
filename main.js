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
  var $Album3 = $('.Album3');
  var $img13 = $('.img13');
  var $img23 =$('.img23');
  var $img33=$('.img33');
  var $Album4 = $('.Album4');
  var $img14 = $('.img14');
  var $img24 =$('.img24');
  var $img34=$('.img34');
  var $Album5 = $('.Album5');
  var $img15 = $('.img15');
  var $img25 =$('.img25');
  var $img35=$('.img35');
  var $Album6 = $('.Album6');
  var $img16 = $('.img16');
  var $img26 =$('.img26');
  var $img36=$('.img36');

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

  $(this).closest("div").siblings().addClass("hide");
  $(".img22").addClass("active");

  $(".img32").addClass("active");


  $(".menu").addClass("active");



  $img12.click(function(event){
    event.preventDefault();

    $(this).addClass("big");

    $(this).closest("a").siblings("a").addClass("hide");

    $(".backbutton").addClass("active");



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

$Album3.click(function (event){
  event.preventDefault();

  $(this).closest("div").siblings().addClass("hide");
  $(".img23").addClass("active");

  $(".img33").addClass("active");


  $(".menu").addClass("active");



  $img13.click(function(event){
    event.preventDefault();

    $(this).addClass("big");

    $(this).closest("a").siblings("a").addClass("hide");

    $(".backbutton").addClass("active");



  });

  $img23.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");
  });

  $img33.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");

  });

});

$Album4.click(function (event){
  event.preventDefault();

  $(this).closest("div").siblings().addClass("hide");
  $(".img24").addClass("active");

  $(".img34").addClass("active");


  $(".menu").addClass("active");



  $img14.click(function(event){
    event.preventDefault();

    $(this).addClass("big");

    $(this).closest("a").siblings("a").addClass("hide");

    $(".backbutton").addClass("active");



  });

  $img24.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");
  });

  $img34.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");

  });

});

$Album5.click(function (event){
  event.preventDefault();

  $(this).closest("div").siblings().addClass("hide");
  $(".img25").addClass("active");

  $(".img35").addClass("active");


  $(".menu").addClass("active");



  $img15.click(function(event){
    event.preventDefault();

    $(this).addClass("big");

    $(this).closest("a").siblings("a").addClass("hide");

    $(".backbutton").addClass("active");



  });

  $img25.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");
  });

  $img35.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");

  });

});

$Album6.click(function (event){
  event.preventDefault();

  $(this).closest("div").siblings().addClass("hide");
  $(".img26").addClass("active");

  $(".img36").addClass("active");


  $(".menu").addClass("active");



  $img16.click(function(event){
    event.preventDefault();

    $(this).addClass("big");

    $(this).closest("a").siblings("a").addClass("hide");

    $(".backbutton").addClass("active");



  });

  $img26.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");
  });

  $img36.click(function(event){
    event.preventDefault();

    $(this).addClass("big");
    $(this).closest("a").siblings("a").addClass("hide");
    $(".backbutton").addClass("active");

  });

});


});
