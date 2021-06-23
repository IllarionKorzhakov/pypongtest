jQuery('document').ready(function() {

	var fink;
	var width = $(window).width();

	run = true

	fink = function(){
		if (run == true) {
			$('#pypong').remove();
			$('#download').remove();
			$('#news').remove();
			$('#info').remove();
			$('#button-mini-menu').html('Показать')
			$('body').css('background', 'url(image/background3.png) center 872px no-repeat, url(image/background2.png) center 397px no-repeat, url(image/background.png) center 0 no-repeat fixed');
			run = false
		} else if (run == false) {
			$('.ul-menu').append('<li class="li-menu"><a class="a-menu" id="pypong" href="">pypong</a></li>');
			$('.ul-menu').append('<li class="li-menu"><a class="a-menu" id="download" href="tabs/download-new.html">скачать</a></li>');
			$('.ul-menu').append('<li class="li-menu"><a class="a-menu" id="news" href="tabs/news.html">новости</a></li>');
			$('.ul-menu').append('<li class="li-menu"><a class="a-menu" id="info" href="tabs/about.html">об игре</a></li>');
			$('#button-mini-menu').html('Скрыть')
			$('body').css('background', 'url(image/background3.png) center 1020px no-repeat, url(image/background2.png) center 545px no-repeat, url(image/background.png) center 148px no-repeat');
			run = true
		}

	}

	jQuery('#button-mini-menu').click(fink);

}); 