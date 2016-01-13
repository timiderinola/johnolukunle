$(document).ready(function() {

  $("#pictures").owlCarousel({
    autoPlay: 4000,
    slideSpeed: 600,
    paginationSpeed: 800,
    singleItem: true,
    navigation : true
  });

  $('#publication-slides').owlCarousel({
      items : 4,
      itemsDesktop : [1000,3],
      itemsDesktopSmall : [900,2],
      itemsTablet: [600,1],
      itemsMobile : false,
      navigation : true
    });
});

