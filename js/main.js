$(function(){

// $('.business__wrapper, .news__slider-inner').slick({
//     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
//     prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
//     infinite: false,
//     slidesToShow: 1,
//   });
$('.business__wrapper').slick({
	arrows:false,
	dotsClass: 'styledots slick-dots',
	infinite: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint:975,
            settings: {
            	dots:true,
                arrows: false,
                infinite: true,
					  speed: 300,
                slidesToShow: 1,
            }
        }
    ]
});
$('.strategy__inner').slick({
	dotsClass: 'styledots slick-dots',
	arrows: false,
	infinite: true,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint:1050,
            settings: {
                dots: true,
                arrows: false,
					  infinite: true,
					  speed: 300,
					  slidesToShow: 1,
					  centerMode: true,
					  variableWidth: true
            }
        },
        {
            breakpoint:970,
            settings: {
                slidesToShow: 1,
                centerMode: true,
					 variableWidth: true,
					 infinite: true,
                arrows: false,
            	dots:true
            }
        }
    ]
});
$('.strategy__goal-inner, .strategy__imp-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    arrows: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint:1050,
            settings: {
                slidesToShow: 2,
					 infinite: true,
                arrows: true,
            }
        },
        {
            breakpoint:680,
            settings: {
                slidesToShow: 1,
					 infinite: true,
                arrows: true,
            }
        }
    ]
});

$('select').styler();

	$('.header__btn-menu').on('click',function(){
	$('.menu ul').slideToggle();
});
}); 