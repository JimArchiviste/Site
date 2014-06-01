window.intervalID = 0;

$( document ).on('i18n:load', function()
{

        window.intervalID = setInterval(function()
        {
           right_slide();
        }, 5000);

        $(".fa-circle").on('click', function()
        {
                move_to_slide($(this).index());
        });



        $('#slideright').on('click', function()
        {
                right_slide();
        });


        $('#slideleft').on('click', function()
        {
                left_slide();
        });
        $('.selected_slide').css({"display": "inline-block"});
});

function move_to_slide (index)
{
	var source = $('#carousel').children('.selected_slide');
	var source_index = source.index();
	if (index === source_index) return;
	if(source_index < index)
	{
		right_slide($( "#carousel li:eq( " + index + " )" ));
	}
	else
	{
		left_slide($( "#carousel li:eq( " + index + " )" ));
	}
}

function right_slide(target)
{
	$('#slideright').unbind();
	$('#slideleft').unbind();
	$(".fa-circle").unbind();
	window.clearInterval(window.intervalID);
	var duration = 1000;
	var parent_div = $('#carousel');
	var select = parent_div.children('.selected_slide');
	var right = null;
	var true_right = null;
	if (select.next().html() === undefined)
	{
		true_right = $("#carousel li:first-child");
		right = true_right.clone().appendTo(parent_div);
	}
	else if (target === undefined)
	{
		right = select.next();
	}
	else
	{
		right = target;
	}
	right.css({"display": "inline-block", "width": "33.3333%"});
	select.css({"display": "inline-block", "width": "33.3333%"});
	$(".selected_button").removeClass("selected_button");
	select.animate({
		marginLeft : "0px"
	}, duration, function()
	{
		select.hide();
		select.removeAttr('class');
		if (true_right !== null)
		{
			right.remove();
			true_right.addClass('selected_slide');
			true_right.removeAttr("style");
			true_right.css({"display": "inline-block"});
			$( "#circles button:eq( " + true_right.index()  + " )" ).addClass("selected_button");
		}
		else
		{
			right.removeClass();
			right.addClass('selected_slide');
			right.removeAttr("style");
			right.css({"display": "inline-block"});
			$( "#circles button:eq( " + right.index()  + " )" ).addClass("selected_button");
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
		$('.fa-circle').on('click', function()
		{
			move_to_slide($(this).index());
		});
		window.intervalID = setInterval(function()
		{
		   right_slide();
		}, 5000);
	});
	

}


function left_slide(target)
{
	$('#slideright').unbind();
	$('#slideleft').unbind();
	$(".fa-circle").unbind();
	window.clearInterval(window.intervalID);
	var parent_div = $('#carousel');
	var select = parent_div.children('.selected_slide');
	var left = null;
	var true_left = null;
	if (select.prev().html() === undefined)
	{
		true_left = $("#carousel li:last-child");
		left = true_left.clone().prependTo(parent_div);
	}
	else if (target === undefined)
	{
		left = select.prev();
	}
	else
	{
		left = target;
	}
	select.css({"display": "inline-block", "width": "33.3333%", "margin-left": "0px"});
	left.css({"display": "inline-block", "width": "33.3333%"});
	$(".selected_button").removeClass("selected_button");
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
			true_left.css({"display": "inline-block"});
			$( "#circles button:eq( " + true_left.index()  + " )" ).addClass("selected_button");
		}
		else
		{
			left.addClass('selected_slide');
			left.removeAttr("style");
			left.css({"display": "inline-block"});
			$( "#circles button:eq( " + left.index()  + " )" ).addClass("selected_button");
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
		$('.fa-circle').on('click', function()
		{
			move_to_slide($(this).index());
		});
		window.intervalID = setInterval(function()
		{
		   right_slide();
		}, 5000);
	});
}

