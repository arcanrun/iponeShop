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
});
