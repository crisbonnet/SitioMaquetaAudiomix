$(document).ready(function(){
   $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
 $('.fixed-action-btn').floatingActionButton();
 $('.tabs').tabs();
 $('.materialboxed').materialbox();
  $('.collapsible').collapsible();

 });


 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
  fullWidth: true,
  indicators: true,
  });
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems,{
  height: 500,
    });
  });
