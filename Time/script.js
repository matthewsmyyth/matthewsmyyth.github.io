$(document).ready(function() {
  setInterval(function() {
  	var minutes = time.getMinutes();
    var seconds = time.getSeconds();
     $(".").css("width", seconds+"vw");
  }, 1000);
});