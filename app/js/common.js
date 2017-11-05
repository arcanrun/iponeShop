$(function() {

	// Yamm mnu
	$(document).on('click', '.yamm .dropdown-menu', function(e) {
		e.stopPropagation()
	})
	// end Yamm mnu


// owl
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// end owl

// tabs
$(".tabs-content .item-delivery").not(":first").hide();
$(".tabs-control a").on("click", function(e){
   e.preventDefault();
   $(".tabs-control a").removeClass("active").eq($(this).index()).addClass("active");
   $(".tabs-content .item-delivery").hide().eq($(this).index()).fadeIn();
   console.log($(this).index());
   console.log($(this).eq());
});
// end tabs

// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
// end tooltip

// asdide mnu
$(".aside-mnu li").on("click", function(e){
  $(".aside-mnu li a").removeClass("active");
  $(this).children("a").addClass("active");
  $(this).children("a").children("i").toggleClass(function(){
    if($(this).hasClass("fa-chevron-down"))
    {
      $(this).removeClass("fa-chevron-down");
      return "fa-chevron-up"
    }
    else
    {
       $(this).removeClass("fa-chevron-up");
      return "fa-chevron-down"
    }
  });
});

// end aside mnu
});
