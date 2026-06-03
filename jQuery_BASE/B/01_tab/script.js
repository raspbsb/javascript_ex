var tabLink = $('.tab-menu li'),
	tabContent = $('#tab-content > div');

tabLink.click(function(e){
	e.preventDefault();
	tabLink.children('a').removeClass('active');
	$(this).find('a').addClass('active');

	//var targetID = $(this).find('a').attr('href'); 
	var targetIdx = $(this).index(); //1
	tabContent.hide(); 
	//$(targetID).show();
	tabContent.eq(targetIdx).show(); //2

});

tabContent.eq(0).show();