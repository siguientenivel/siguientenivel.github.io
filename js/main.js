$(document).ready(function(){
    setBackgroundImgSize();
    $(window).on('resize',function(){
	setBackgroundImgSize();
    });

    $('a.scroll-link').on('click',function(ev){
	ev.preventDefault();
	var $link = $(this);
	var target = $link.attr('href');
	if(target) {
	    $('html, body').animate({
		scrollTop: $(target).offset().top
	    }, 1500);
	}
    });

    function setBackgroundImgSize(){
	var h = $(window).height();
	var w = $(window).width();
	$('.main').css({'min-height':h*0.85});

	if(w <= 768){
	    $('.main').css({'background-position-x':'-275px'});
	}
	else {
	    $('.main').css({'background-position-x':'0px'});
	}


    }
});
