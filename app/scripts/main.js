'use strict';

$(function () {

	// Intro animation. On button click, remove the intro text and dispaly
	// navbar and slideshow.
	$('.btn-start').click(function () {
		$('.intro-container').prop('disabled', true).animate({ opacity: 0 }).fadeOut(1000, function () {
			$('.intro-container').attr('hidden');
			location.href = "home.html";
		});
	});


	// only on pages where we have slideshow
	if (window.location.pathname == "/priroda.html") {
	
		// Handle slideshow.
		var counter = 0,
		    // to keep track of current slide
		$items = document.querySelectorAll('.diy-slideshow figure'),
		    // a collection of all of the slides, caching for performance
		numItems = $items.length; // total number of slides

		// this function is what cycles the slides, showing the next or previous slide and hiding all the others
		var showCurrent = function showCurrent() {
			var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show  

			// remove .show from whichever element currently has it 
			// http://stackoverflow.com/a/16053538/2006057
			[].forEach.call($items, function (el) {
				el.classList.remove('show');
			});

			// add .show to the one item that's supposed to have it
			$items[itemToShow].classList.add('show');
		};

		// add click events to prev & next buttons 
		document.querySelector('.next').addEventListener('click', function () {
			counter++;
			showCurrent();
		}, false);

		document.querySelector('.prev').addEventListener('click', function () {
			counter--;
			showCurrent();
		}, false);
				
		//$('.diy-slideshow').attr('style', 'visibility: visible');
		//$('.slideshow-headline').attr('style', 'visibility: visible');

		// Handle keyboard arrows for switching slides.
		document.onkeydown = function (e) {
			switch (e.keyCode) {
				case 37:
					// left
					counter++;
					showCurrent();
					break;
				case 39:
					// right
					counter--;
					showCurrent();
					break;
			}
		};
	}
});
//# sourceMappingURL=main.js.map
