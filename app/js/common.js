$(function() {

	// Yamm mnu
	$(document).on('click', '.yamm .dropdown-menu', function(e) {
		e.stopPropagation()
	})

  $("#toggle-yamm").on('click', function(e) {

    console.log("work");
    e.preventDefault();
    $(".main-logo").toggleClass("active-logo");
  
     $(".dropdown-menu").toggle();
     if($(".main-logo").hasClass("active-logo"))
    {
      $(".main-logo").children("a").children("img").attr("src", "img/logo-white.png");
        $(".header-main .navbar-default").css
        ({
          "background":"#fff"
        });
        $(".header-main .tel-blc a").css
        ({
          "color":"#595c63",
          "border-bottom":"1px dashed #595c63"
        });
        $(".header-main .navbar-default .navbar-nav>li>a").css
        ({
          "color":"#595c63" 
        });
        $(".header-main .navbar-default .navbar-nav>li>a.active").css
        ({
          "color":"#595c63"
        });
        $(".header-main .navbar-default .navbar-nav>li>a:hover").css
        ({
          "color":"#595c63"
        });
    }
    else
    {
      $(".main-logo").children("a").children("img").attr("src", "img/logo.png");
        $(".header-main .navbar-default").css
        ({
          "background":"transparent"
        });
        $(".header-main .tel-blc a").css
        ({
          "color":"#fff",
          "border-bottom":"1px dashed #fff"
        });
        $(".header-main .navbar-default .navbar-nav>li>a").css
        ({
          "color":"#e9e9ea" 
        });
        $(".header-main .navbar-default .navbar-nav>li>a.active").css
        ({
          "color":"#fff"
        });
        $(".header-main .navbar-default .navbar-nav>li>a:hover").css
        ({
          "color":"#fff"
        });
    }

  })
  // drop-down-main-mnu
  $("#drop-down-main-mnu").mCustomScrollbar({
    theme:"my-theme"
  });
  // end drop-down-main-mnu
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

// tabs for delivery page
$(".tabs-content .item-delivery").not(":first").hide();
$(".tabs-control a").on("click", function(e){
 e.preventDefault();
 $(".tabs-control a").removeClass("active").eq($(this).index()).addClass("active");
 $(".tabs-content .item-delivery").hide().eq($(this).index()).fadeIn();
 console.log($(this).index());
 console.log($(this).eq());
});
// end tabs for delivery page

// tabs for card page
$(".tabs-content .item-card").not(":first").hide();
$(".tabs-control-card a").on("click", function(e){
 e.preventDefault();
 $(".tabs-control-card a").removeClass("active").eq($(this).index()).addClass("active");
 $(".tabs-content .item-card").hide().eq($(this).index()).fadeIn();
 console.log($(this).index());
 console.log($(this).eq());
});
// end tabs for card page

// tabs for nav
$(".tabs-content .item-catalog").not(":first").hide();
$(".tabs-control li").on("click", function(e){
 e.preventDefault();
 $(".tabs-control li").removeClass("active").eq($(this).index()).addClass("active");
 $(".tabs-content .item-catalog").hide().eq($(this).index()).fadeIn();
 console.log($(this).index());
 console.log($(this).eq());
});
// end tabs for nav


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

// range slider
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
// end range slider
// toggle show more filter
$("#showFilter1").on("click", function(e){
  e.preventDefault();
  $(".drop-down-filter-body").fadeToggle();
  $(".more-filter-2").toggleClass("bg-darker");
  
});
// end toggle filter
  // on min imgs
  var index = 1;
  $(".min-gallery").on("click", function(e){
    e.preventDefault();
    index = $(this).children("img").attr("alt");
    $(".max-gallery").attr("src", "img/ipone-card-" + index + ".png")
    console.log(index);
  });
  // end om min imgs
  // on arrows
  
  // to the right
  $(".min-right").on("click", function(){
    if(index <= 2)
    {
      var i = ($(this).siblings("a").next().index()) - 2;
      index = +index + i;
      $(".max-gallery").attr("src", "img/ipone-card-" + index + ".png")
      console.log(index);
    }
  });
  // to the left
  $(".min-left").on("click", function(){
    if(index >= 2)
    {
     var i = ($(this).siblings("a").prev().index()) - 2;
     index = +index + i;
     $(".max-gallery").attr("src", "img/ipone-card-" + index + ".png")
     console.log(index);
   }
 });
  
  // end om arrows
// mini gallary for card page

// end mini gallary for card page
});
