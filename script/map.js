function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var pos = new google.maps.LatLng(54.519511, 18.536473);

	var styles = [
{
	"featureType": "administrative",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "off"
		}
	]
},
{
	"featureType": "poi",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "simplified"
		}
	]
},
{
	"featureType": "road",
	"elementType": "labels",
	"stylers": [
		{
			"visibility": "simplified"
		}
	]
},
{
	"featureType": "water",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "simplified"
		}
	]
},
{
	"featureType": "transit",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "simplified"
		}
	]
},
{
	"featureType": "landscape",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "simplified"
		}
	]
},
{
	"featureType": "road.highway",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "off"
		}
	]
},
{
	"featureType": "road.local",
	"elementType": "all",
	"stylers": [
		{
			"visibility": "on"
		}
	]
},
{
	"featureType": "road.highway",
	"elementType": "geometry",
	"stylers": [
		{
			"visibility": "on"
		}
	]
},
{
	"featureType": "water",
	"elementType": "all",
	"stylers": [
		{
			"color": "#84afa3"
		},
		{
			"lightness": 52
		}
	]
},
{
	"featureType": "all",
	"elementType": "all",
	"stylers": [
		{
			"saturation": -17
		},
		{
			"gamma": 0.36
		}
	]
},
{
	"featureType": "transit.line",
	"elementType": "geometry",
	"stylers": [
		{
			"color": "#3f518c"
		}
	]
}
	];

	var mapOptions = {
		center: pos,
		zoom: 18,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true,
		disableDoubleClickZoom: true,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: styles,
	}

	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: pos,
		map: map,
		title: 'Krzysztof Maj - Kancelaria Adwokacka',
		icon: '/images/map.png'
	});

	var desc =
		'<div class="content text-center" style="margin: 16px 0 0 16px">' +
			'<img src="/images/logo.svg" class="logo-small" alt="Kancelaria" />' +
		'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: desc
	});

	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});
	infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', initialize);