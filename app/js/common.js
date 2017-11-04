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
    nav:true,
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
});
