$(document).ready(function() {


//our nav links
  var $Album1 = $('.Album1');

//  var $album2 = $('.').eq(1);
//  var $album3 = $('nav a').eq(2);
//  var $album4 = $('nav a').eq(3);
//  var $album5 = $('nav a').eq(4);
//  var $album6 = $('nav a').eq(5);

$Album1.click(function (event){
  event.preventDefault();
console.log(this);
//  $(this).closest("img").children().addClass("active");
  $(this).closest("div").siblings().addClass("hide");
  $(this).getElementbyClass("menu").addClass("active");


  $(this).getElementbyClass("img2").addClass("active");

  $('.Album1').siblings().addClass("hide");


});








});
