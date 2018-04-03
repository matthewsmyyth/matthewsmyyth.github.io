$(document).ready(function() {
  
  setTimeout(function(){
  	
  	$(".alarm-waves").addClass("alarming");
  
  	$("body").addClass("alarming");

    $(".beachsong").get(0).play();

  },15000);

    


 setTimeout(function(){
  	
  	$(".alarming-bg").addClass("switchwaves");
  
  	$("body").addClass("switchwaves");},18000);

  
setTimeout(function(){
  	
  	$(".surfs-up").addClass("surf-text");
   
  
  	$("body").addClass("switchwaves");},18000);

setTimeout(function(){
   
    $(".high-tideone").addClass("high-tidetwo");
  
    $("body").addClass("switchwaves");},18000);




  $(".high-tideone").click(function(){
  $(".surfs-up").removeClass("surf-text ");
  $(".high-tideone").removeClass("high-tidetwo");
  $(".alarming-bg").removeClass("switchwaves");
  $(".alarming").addClass("alarm-waves");
  $(".beachsong").get(0).pause();
  })

  

});
