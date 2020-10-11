; (function () {
	'use strict'
	// Initialize and add the map
	function initBaMap() {
		// The location of mapCenter
		let cities = {
			poltava: {
				coords: { lat: 49.592232, lng: 34.545601 },
				address: 'Котляревского 2'
			},
			kharkiv: {
				coords: { lat: 49.993500, lng: 36.230385 },
				address: 'ул. Прорезная 18/1Г'
			}
		}
		let mapCenter = cities.poltava.coords;
		// The map, centered at mapCenter
		let mapEl = document.querySelector('.map');

		let mapOptions =
		{
			zoom: 16,
			center: mapCenter,
			disableDefaultUI: true,
			styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
		};
		let $baMap = new google.maps.Map(mapEl, mapOptions);

		for (let city in cities) {
			let marker = new google.maps.Marker({
				position: cities[city].coords,
				map: $baMap,
				icon: "map-marker.png"
			}
			);
		}
	}


  window.addEventListener('load', initBaMap);

  let header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    
    if ($(window).scrollTop() > header.clientHeight/2){
      
      header.classList.add('decrease-header');
    }
    else {
      
      header.classList.remove('decrease-header');
    }
  });

  $('.menu-toggle .checkbox4').on('change', function () {
    $('.main-nav-mobile').toggleClass('active');
    $('body').toggleClass('stop-scroll');
  });

  let advantagesSlider = $('.advantages-wrapper');
  advantagesSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '[data-advantages-prev]',
        nextArrow: '[data-advantages-next]',
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 768,
            settings: 'unslick'
          }
        ]
      });

  let demontageSlider = $('.demontage-wrapper');
  demontageSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '[data-demontage-prev]',
        nextArrow: '[data-demontage-next]',
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 768,
            settings: 'unslick'
          }
        ]
      });

})();

