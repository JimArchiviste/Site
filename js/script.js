$( document ).ready( function(){

		var parent_div = $('#carousel');
		//var select = parent_div.children('.selected_slide');
		//var right = parent_div.children('.right');
		var largeur_parent_div = parent_div.width();
		//console.log(largeur_parent_div);
		//largeur_parent_div = "3000"
		//largeur_parent_div = largeur_parent_div.substring(0, largeur_parent_div.length -2);
		largeur_parent_div = parseInt(largeur_parent_div) / 3;
		//console.log(typeof(largeur_parent_div));
		parent_div.css({"position": "relative", "left": "-" + largeur_parent_div + "px"});
		//var largeur = $('#contener').css("width");
		//select.css({"width": largeur,"margin-left": largeur, "margin-right": "0px"});
		//right.css({"width": largeur});
		

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
		if(parent_div.children('.left').css("margin-left") !== "0px") return;
		var select = parent_div.children('.selected_slide');
		select.css({"margin-right": "0px"});
		var right = parent_div.children('.right');
		//var largeur_parent_div = parent_div.width();
		//console.log(largeur_parent_div);
		//largeur_parent_div = "3000"
		//largeur_parent_div = largeur_parent_div.substring(0, largeur_parent_div.length -2);
		//largeur_parent_div = parseInt(largeur_parent_div) / 3;
		//console.log(typeof(largeur_parent_div));
		//parent_div.css({"position": "relative", "left": "-" + largeur_parent_div + "px"});
		var largeur = $('#contener').css("width");
		select.css({"display": "inline-block"});
		right.css({"position": "relative", "margin-right": "0px", "display": "inline-block"});
		select.css({"width": largeur,"margin-left": largeur, "margin-right": "0px"});
		right.css({"width": largeur,"right": largeur});
		if(right.hasClass('first_li')) {
			right.next().addClass('first_li');
			right.removeClass('first_li');
			right.appendTo(parent_div);
			right.prev().removeClass('last_li');
			right.addClass('last_li');
		}
		select.css({"display": "inline-block"});
		right.css({"display": "inline-block"});
		select.animate({
			marginLeft : "0px"
		}, 1000, function(){
			select.hide();
			//select.css({"margin-left": "0px"});
		});
		
		select.prev().removeClass('left');
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
