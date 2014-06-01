window.onresize = function(){
	if (window.innerWidth > 600) 
	{
		$('#menu_choices').removeAttr("style");
		$('.fa-globe').css({"float": "right", "margin-top": "8px", "margin-right": "5px"});
	}
}

$( document ).ready( function()
{
	i18n.init(function()
	{
		$("body").i18n();
		$(document).trigger('i18n:load');
	});
	

});

$( document ).on('i18n:load', function()
{
	if (window.innerWidth > 600) 
	{
		$('.fa-globe').css({"float": "right", "margin-top": "8px", "margin-right": "5px"});
	}
	$("#display_menu").click(function()
	{	
		var choices = $('#menu_choices') ;
		var langues = $('#langues');	
		if (choices.is(':hidden'))
		{
			//if(langues.is(':visible')) langues.slideUp();
			choices.slideDown();
		}

		else
		{
			choices.slideUp();
		}
	});

	$(".fa-globe").click(function()
	{	
		var lang = $('#langues') ;	
		var choices = $('#menu_choices') ;
		if (lang.is(':hidden'))
		{
			//if(choices.is(':visible') && window.innerWidth < 601) choices.slideUp();
			lang.slideDown();
		}

		else
		{
			lang.slideUp();
		}
	});
	
	$('img').on('click', function()
        {
                var lang = $(this).attr('name');
                i18n.setLng(lang, function()
                {
                        $("body").i18n({lng: lang});
                });
        });	
});
