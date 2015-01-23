$(document).ready(function() {



//  $("href").click(function (event) {
  //  event.preventDefault();

    //var relatedClass = "." + $(this).attr('rel');  // .post1 or .post2 or .post3

//    $(this).closest("li").siblings().removeClass("hide");
//    $(this).closest("li").addClass("active");
//    $(relatedClass).siblings().removeClass("active");
//    $(relatedClass).addClass('active');

//    console.log(relatedClass);


//  });

var $Album1 = $('.Album1');
var $img1 = $('.img1');
var $img21 =$('.img21');
var $img31=$('.img31');

$Album1.click(function (event){
  event.preventDefault();
  //console.log(this);
  //  $(this).closest("img").children().addClass("active");
  //  $('.Album1').children().addClass("active");
  $(this).closest("article").siblings().addClass("hide");
  //$(this).addClass("active");
  //$(this).parent().addClass("hide");
  $(this).closest("a").siblings("a").addClass("hide");
  //$(this).next().addClass("active");


  //$(this).closest("img").children().("active");
  //$(this).children("img").addClass("active");
  $(".activeNav").addClass("active");




});

});
