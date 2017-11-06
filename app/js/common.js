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
$(".aside-mnu li>a").on("click", function(e){
  $(".aside-mnu li a").removeClass("active");
  $(this).addClass("active");
  $(this).children("i").toggleClass("rotated unrotated").ccs("top", "2px");
});

// end aside mnu

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100000,
      values: [ 0, 100000 ],
      slide: function( event, ui ) {
        $( "#amount_1" ).val(  ui.values[ 0 ] );
        $( "#amount_2" ).val(  ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    $( "#amount_1" ).on("keypress", function(){
      if($("#amount_1").val() <= $( "#slider-range" ).slider( "values", 1 ) )
      {
        $( "#slider-range" ).slider( "values",0, $(this).val() );

      }
     
    });
    $( "#amount_2").on("keypress", function(){
      if($("#amount_2").val() > $("#amount_1").val())
      {
        $( "#slider-range" ).slider( "values",1, $(this).val() );
      }
     
    });
     
});
