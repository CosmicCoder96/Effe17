$(document).ready(function() {
  $("body").toggleClass("lightmode");
});

$(".fa-facebook-square").hover(function() {
  $(".fbinfo").toggle();
  $(".welcome").hide();
  });
$(".welcome").show ();

$(".fa-camera-retro").hover(function() {
  $(".iginfo").toggle();
  $(".welcome").hide();

});

$(".fa-twitter").hover(function() {
  $(".twinfo").toggle();
  $(".welcome").hide();
});

$(".fa-envelope-square").hover(function() {
  $(".gpinfo").toggle();
  $(".welcome").hide();
});
$('.fa-phone-square').on('click', function(){
  console.log('hello');
   $("html, body").animate({ scrollTop: 1000 }, 1000);
})

$(".fa-phone-square").hover(function() {
  $(".phinfo").toggle();
  $(".welcome").hide();
});

$(".fa-youtube").hover(function() {
  $(".ytinfo").toggle();
  $(".welcome").hide();
});