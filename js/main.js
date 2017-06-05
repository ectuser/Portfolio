$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

