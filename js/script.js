$( document ).ready( function()
{
	/**var locat = window.location.pathname;
	if (locat === '/ghislain/') locat += 'index.html';

	display_menu($("#my_name"));

	var choices = $("#menu_choices");

	choices.children().each(function(e)
	{	
		var that = $(this);
		display_menu(that);
	});

	function display_menu (that)
	{
                if (that.attr('href') === undefined) return;
                if ('/ghislain/' + that.attr('href') === locat)
		{
                        that.addClass('selected_page');
                }
                that.click( function()
		{
                        document.location.href = that.attr('href');
                });


	}**/

	//$("nav a.select" ).removeClass("selected");
	$("#display_menu").click(function()
	{		
		if (choices.is(':hidden'))
		{
			choices.slideDown();
		}

		else
		{
			choices.slideUp();
		}

	});


	$('#slideright').on('click', function()
	{
		right_slide();
	});


	$('#slideleft').on('click', function()
	{
		left_slide();
	});

	function right_slide()
	{
		$('#slideright').unbind();
		$('#slideleft').unbind();
		var parent_div = $('#carousel');
                var select = parent_div.children('.selected_slide');
		var right = null;
		var true_right = null;
		if (select.next().html() === undefined)
		{
			true_right = $("#carousel li:first-child");
			right = true_right.clone().appendTo(parent_div);
		}
		else
		{
			right = select.next();
		}
                right.css({"display": "inline-block", "width": "33.3333%"});
                select.css({"display": "inline-block", "width": "33.3333%"});
                select.animate({
                        marginLeft : "0px"
                }, 1000, function()
                {
                        select.hide();
                        select.removeAttr('class');
			if (true_right !== null)
			{
				right.remove();
				true_right.addClass('selected_slide');
				true_right.removeAttr("style");
			}
			else
			{
				right.removeClass();
				right.addClass('selected_slide');
				right.removeAttr("style");
			}
                        select.removeAttr('style');
                        $('#slideright').on('click', function()
			{
				right_slide();
			});
                        $('#slideleft').on('click', function()
			{
				left_slide();
			});
                });

	}


	function left_slide()
	{
		$('#slideright').unbind();
		$('#slideleft').unbind();
		var parent_div = $('#carousel');
		var select = parent_div.children('.selected_slide');
		var left = null;
		var true_left = null;
		if (select.prev().html() === undefined)
		{
			true_left = $("#carousel li:last-child");
			left = true_left.clone().prependTo(parent_div);
		}
		else
		{
			left = select.prev();
		}
		select.css({"display": "inline-block", "width": "33.3333%", "margin-left": "0px"});
		left.css({"display": "inline-block", "width": "33.3333%"});
		left.animate({
			marginLeft : "33.3333%"
		}, 1000, function()
		{
			select.hide();
                        select.removeAttr('class');
			if (true_left !== null)
			{
				left.remove();
				true_left.addClass('selected_slide');
				true_left.removeAttr("style");
			}
			else
			{
				left.addClass('selected_slide');
				left.removeAttr("style");
			}
			select.removeAttr("style");
                        $('#slideright').on('click', function()
			{
				right_slide();
			});
                        $('#slideleft').on('click', function()
			{
				left_slide();
			});
		});
	}
});
