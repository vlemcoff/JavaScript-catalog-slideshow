// Fancybox zoom options
var options = {
	'transitionIn'		:	'elastic',
	'transitionOut'		:	'elastic',
	'speedIn'			:	600, 
	'speedOut'			:	200,
	'padding'			:	0,
	'showCloseButton'	:	false,
	'hideOnContentClick':	true,
	'autoScale'			:	false
};

// Create array of images
var pages = ['img1', 'img2', 'img3', 'img4'];
var counter = 0;
var numPages = pages.length;
var pageWidth = 500;
var pageHeight = 575;
               
// Navigation
$(document).ready(function(){
	
	$(".prev").click(prevPage);
	$(".next").click(nextPage);
	
	// Add zoom on cover image
	$("#rightPage a").fancybox(options);
		
});

// Go to next page
function nextPage() {

	// When reaching the end, don't do anything
	if (counter >= numPages) {return false};

	// Increment by two
	counter += 2;
	
	// Display left page image	
	$("#leftPage").html("<a href=\"images/" + pages[counter - 1] + ".jpg\"><img src=\"images/" + pages[counter - 1] + "Thmb.jpg\" width=\"" + pageWidth + "\" height=\"" + pageHeight + "\" alt=\"Page" + pages[counter - 1] + "\" /></a>");
	
	// Add zoom
	$('#leftPage a').fancybox(options);
	
	// If at the end, and don't display the right page
	if (counter === numPages) {
	
	$("#rightPage").html("");
	
	} else {
	
	$("#rightPage").html("<a href=\"images/" + pages[counter] + ".jpg\"><img src=\"images/" + pages[counter] + "Thmb.jpg\" width=\"" + pageWidth + "\" height=\"" + pageHeight + "\" alt=\"Page" + pages[counter] + "\" /></a>");

	// Add zoom
	$('#rightPage a').fancybox(options);
	
	};
	
}

// Go to previous page

function prevPage() {
	
	// If at the beginning, don't do anything
	if (counter === 0) {return false;}

	// Decrease by two
	counter -= 2;	
	
	// Display right page	
	$("#rightPage").html("<a href=\"images/" + pages[counter] + ".jpg\"><img src=\"images/" + pages[counter] + "Thmb.jpg\" width=\"" + pageWidth + "\" height=\"" + pageHeight + "\" alt=\"Page" + pages[counter] + "\" /></a>");
	
	// Add zoom
	$('#rightPage a').fancybox(options);
	
	// If at the beginning, don't display the left page
	if (counter <= 0) {
	
	$("#leftPage").html("");
	
	} else {
	
	$("#leftPage").html("<a href=\"images/" + pages[counter - 1] + ".jpg\"><img src=\"images/" + pages[counter - 1] + "Thmb.jpg\" width=\"" + pageWidth + "\" height=\"" + pageHeight + "\" alt=\"Page" + pages[counter - 1] + "\" /></a>");
	
	// Add zoom
	$('#leftPage a').fancybox(options);
	
	};
	
}