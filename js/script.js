$( document ).ready( function(){

	var locat = window.location.pathname;

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




});
