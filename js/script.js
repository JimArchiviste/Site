$( document ).ready( function(){


	var locat = window.location.pathname;
	if (locat === '/ghislain/') locat += 'index.html';

	display_menu($("#my_name"));

	var choices = $("#menu_choices");

	choices.children().each(function(e){
		
		var that = $(this);

		display_menu(that);
	})

	function display_menu (that) {

                if (that.attr('href') === undefined) return;
                if ('/ghislain/' + that.attr('href') === locat){

                        that.addClass('selected');

                }

                that.click( function(){

                        document.location.href = that.attr('href');

                });


	}

	//$("nav a.select" ).removeClass("selected");
	$("#display_menu").click(function(){		

		
		if (choices.is(':hidden')){
			choices.slideDown();
		}

		else {
			choices.slideUp();
		}

	});

	

	$('#slideright').click(function() {
		var parent_div = $('#carousel');
		var select = parent_div.children('.selected_slide');
		if(select.css("margin-left") !== $('#contener').css("width")) return;
		var right = parent_div.children('.right');
		if(right.hasClass('first_li')) {
			right.next().addClass('first_li');
			right.removeClass('first_li');
			right.appendTo(parent_div);
			right.prev().removeClass('last_li');
			right.addClass('last_li');
		}
		select.css({"display": "inline-block", "width": "33.333333333%"});
		right.css({"display": "inline-block", "width": "33.3333333333%"});
		select.animate({
			marginLeft : "0px"
		}, 1000, function(){
			select.hide();
			select.css({"width": "", "margin-left": ""});
			select.parent().children('.left').removeClass('left');
			right.removeClass('right');
			right.addClass('selected_slide');
			select.removeClass('selected_slide');	
			select.addClass('left');
			if (right.next().html() === undefined) {
				$('#carousel li:first-child').addClass('right');
			}	
			else {
				right.next().addClass('right');
			}
		});
	});

	$('#slideleft').click(function() {
		var parent_div = $('#carousel');
		var select = parent_div.children('.selected_slide');
		if(select.css("margin-left") !== $('#contener').css("width")) return;
		var left = parent_div.children('.left');
		if(left.hasClass('last_li')) {
			left.prev().addClass('last_li');
			left.removeClass('last_li');
			left.prependTo(parent_div);
			left.next().removeClass('first_li');
			left.addClass('first_li');
		}
		select.css({"display": "inline-block", "width": "33.333333333%", "margin-left": "0px"});
		left.css({"display": "inline-block", "width": "33.3333333333%"});
		left.animate({
			marginLeft : "33.33333333333333%"
		}, 1000, function(){
			select.hide();
			select.css({"width": "", "margin-left": ""});
			select.parent().children('.right').removeClass('right');
			left.removeClass('left');
			left.addClass('selected_slide');
			select.removeClass('selected_slide');	
			select.addClass('right');
			if (left.prev().html() === undefined) {
				$('#carousel li:last-child').addClass('left');
			}	
			else {
				left.prev().addClass('left');
			}
		});
	});



});
