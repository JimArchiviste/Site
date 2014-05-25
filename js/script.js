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
		var largeur = $('#contener').width();
		//if(select.css("margin-left") !== "33.333333333%") return;
		//select.css({"margin-right": "0px"});
		var right = parent_div.children('.right');
		if(right.hasClass('first_li')) {
			right.next().addClass('first_li');
			right.removeClass('first_li');
			right.appendTo(parent_div);
			right.prev().removeClass('last_li');
			right.addClass('last_li');
		}
		var margin_left = "-" + largeur;
		//select.css({"margin-left": largeur, "width": largeur})
		//right.css({"margin-left": "0px", "width": largeur});
		select.css({"display": "inline", "width": "33.333333333333333333%"});
		right.css({"display": "inline"});
		select.animate({
			marginLeft : "0px"
		}, 1000, function(){
			select.hide();
			//right.css({"right": "0px"});
			//right.css({"margin-left": largeur});
		});
		
		select.parent().children('.left').removeClass('left');
		right.removeClass('right');
		right.addClass('selected_slide');
		select.removeClass('selected_slide');	
		select.addClass('left');
		console.log(right.next().html());
		if (right.next().html() === undefined) {
			$('#carousel li:first-child').addClass('right');
		}	
		else {
			right.next().addClass('right');
		}
	});



});
