/* Enable smooth scrolling on all links with anchors */
$('.navbar-right li a[href^="#"]').on('click', function (e) {

	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $('section[id="' + this.hash.replace('#', '') + '"]').offset().top - 150
	}, 300, function () {

		// when done, add hash to url
		// (default click behaviour)
		window.location.hash = hash;

	});
});