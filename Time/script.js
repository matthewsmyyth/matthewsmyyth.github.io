$(document).ready(function() {
  
  setTimeout(function(){
  	
  	$(".alarm-waves").addClass("alarming");
  
  	$("body").addClass("alarming");},15000);


 setTimeout(function(){
  	
  	$(".alarming-bg").addClass("switchwaves");
  
  	$("body").addClass("switchwaves");},18000);

  
setTimeout(function(){
  	
  	$(".surfs-up").addClass("surf-text");
  
  	$("body").addClass("switchwaves");},18000);




  $(".surfs-up").click(function(){
  $(".surfs-up").removeClass("surf-text ")
  $(".alarming-bg").removeClass("switchwaves");
  $(".alarming").addClass("alarm-waves");
  })

  

});