jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////// THIS IS THE BEGINNING
	
	function randomCity() {

    var city01 = new Array('Fons de Bikini', 'Bikini Bottom', 'Fondo de Bikini')
    var city02 = new Array('Coruscant', 'Coruscant', 'Coruscant')
    var city03 = new Array('Ciutat Maragda','Emerald City','Ciudad Esmeralda')
    var city04 = new Array('Ciutat Gotham', 'Gotham City', 'Gotham City')
    var city05 = new Array('Hivèrnia', 'Winterfell', 'Invernalia')
    var city06 = new Array('Metropolis', 'Metropolis', 'Metropolis')
    var city07 = new Array('Neo Tokyo', 'Neo Tokyo', 'Neo Tokyo')
    var city08 = new Array('Nova Nova York', 'New New York', 'Nueva Nueva York')
    var city09 = new Array('Raccoon City', 'Raccoon City', 'Raccoon City')
    var city10 = new Array('San Fransokyo', 'San Fransokyo', 'San Fransokyo')
    var city11 = new Array('Twin Peaks', 'Twin Peaks', 'Twin Peaks')
    var city12 = new Array('la Vila del Pingüí', 'Penguin Village', 'Villa Pingüino')
    var city13 = new Array('Port Reial', 'King\'s Landing', 'Desembarco del Rey')
    var city00 = new Array(city01, city02, city03, city04, city05, city06, city07, city08, city09, city10, city11, city12, city13)

    randomCity = city00[Math.floor(Math.random() * city00.length)];
    $('.randomCity').text(randomCity[1]);
  };
	
	randomCity();
	
	$('.masthead-nav > li > a').click(function() {
		if ($(this).parent().hasClass('active')) return false;
    var name = $(this).attr('href');
		var name2 = $(this).attr('href').substring(1);
    var $visible = $('.cover:visible');
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    if ($visible.length == 0) showContent(name);
    else $visible.fadeOut(300, function() {
			showContent(name);
    });
		setTimeout(function() {
			$('body').removeAttr('data-section');
			$('body').attr('data-section', name2);
    }, 300);
	});
	
	$('.btn, .masthead-brand a').click(function() {
    var name = $(this).attr('href');
		var name2 = $(this).attr('href').substring(1);
    var $visible = $('.cover:visible');
    $('.masthead-nav > li.active').removeClass('active');
    $('.masthead-nav > li > a[href="' + name + '"]').parent().addClass('active');
    if ($visible.length == 0) showContent(name);
    else $visible.fadeOut(300, function() {
			showContent(name);
    });
		setTimeout(function() {
			$('body').removeAttr('data-section');
			$('body').attr('data-section', name2);
    }, 300);
	});
	
	function showContent(name) {
		$(name).fadeIn(300);
	}
	
	function showHash() {
		var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"
		if(window.location.hash != ''){
			$('.masthead-nav > li > a[href="#' + hash + '"]').trigger('click');
			$('body').attr('data-section', hash);
		} else {
			$('.masthead-nav > li > a[href="#cover"]').trigger('click');
			$('body').attr('data-section', 'cover');
		}
	};
	
  $(window).load(function() {
		showHash();
		setTimeout(function() {
			$('body').removeClass('invisible').addClass('fadeIn');
    }, 300);
  });
	
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// THIS IS THE END

});
