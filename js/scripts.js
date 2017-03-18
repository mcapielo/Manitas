
$(document).ready(function(){$('.carousel').carousel({interval:false});

/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});


/* copy loaded thumbnails into carousel */
$('.panel .img-responsive').on('load', function() {
  
}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parent('a');
    var title = $(this).parent('a').attr("title");
    
    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('#modalCarousel .carousel-inner'); 
    if (i==0){ // set first item active
     item.addClass('active');
    }
  }
});

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.panel-thumbnail>a').click(function(e){
  
    e.preventDefault();
    var idx = $(this).parents('.panel').parent().index();
  	var id = parseInt(idx);
  	
  	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected
  	return false;
});


    var today = new Date().getDay();

    today = 6;


    switch (today) {
        case 0:
            $(".navbar-custom").css("background-color", "#ffffff");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#ffffff");
            break;
        case 1:
            $(".navbar-custom").css("background-color", "#a061e8");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#a061e8");
            break;
        case 2:
            $(".navbar-custom").css("background-color", "#ef5151");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#ef5151");
            break;
        case 3:
            $(".navbar-custom").css("background-color", "#a8ad0d");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#a8ad0d");
            break;
        case 4:
            $(".navbar-custom").css("background-color", "#efaa64");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#efaa64");
            break;
        case 5:
            $(".navbar-custom").css("background-color", "#baf99a");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#baf99a");
            break;
        case 6:
            $(".navbar-custom").css("background-color", "#186ef7");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#186ef7");
            break;
        default:
            $(".navbar-custom").css("background-color", "#ffffff");
            $(".scroll-top a:link,.scroll-top a:visited").css("color", "#ffffff");

    }


/* google maps */
google.maps.visualRefresh = true;

var map;
function initialize() {
	var geocoder = new google.maps.Geocoder();
	var address = $('#map-input').text(); /* change the map-input to your address */
	var mapOptions = {
    	zoom: 15,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
     	scrollwheel: false
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	
  	if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
                {
                  content: address,
                  map: map,
                  position: results[0].geometry.location,
                });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 

          } else {
          	alert("No results found");
          }
        }
      });
	}
}
google.maps.event.addDomListener(window, 'load', initialize);

/* end google maps */


});