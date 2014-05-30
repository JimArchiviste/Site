/**
*
*	http://fr.openclassrooms.com/informatique/cours/dynamisez-vos-sites-web-avec-javascript/tp-un-formulaire-interactif
*
**/
$(document).ready(function()
{
	function deactivateTooltips()
	{
		var spans = document.getElementsByTagName('span'),
		spansLength = spans.length;
        
		for (var i = 0 ; i < spansLength ; i++)
		{
			if (spans[i].className == 'tooltip')
			{
				spans[i].style.display = 'none';
			}
		}
	}

	deactivateTooltips();
    
	function getTooltip(element)
	{
		while (element = element.nextSibling)
		{
			if (element.className === 'tooltip')
			{
				return element;
			}
		}
		return false;
	}
    
	var check = {};
    
	check['name'] = function(id)
	{
    
		var name = document.getElementById(id),
			tooltipStyle = getTooltip(name).style;
	    
		if (name.value.length >= 4)
		{
			name.className = 'correct';
			tooltipStyle.display = 'none';
			return true;
		}
		else
		{
			name.className = 'incorrect';
			tooltipStyle.display = 'inline-block';
			return false;
		}
	};

	check['email'] = function(id)
	{
		var email = document.getElementById(id),
			tooltipStyle = getTooltip(email).style,
			re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(email.value))
		{
			email.className = 'correct';
			tooltipStyle.display = 'none';
			return true;
		}
		else
		{
			email.className = 'incorrect';
			tooltipStyle.display = 'inline-block';
			return false;
		}
	};
    
    
	var myForm = document.getElementById('myForm'),
	inputs = document.getElementsByTagName('input'),
	inputsLength = inputs.length;
    
            
	myForm.onsubmit = function()
	{
    
		var result = true;
	    
		for (var i in check)
		{
			result = check[i](i) && result;
		}
	    
		if (result)
		{
			alert('Le formulaire est bien rempli.');
		}
		else
		{
			for (var i = 0 ; i < inputsLength ; i++)
			{
				if (inputs[i].type == 'text')
				{
			    
					inputs[i].onkeyup = function()
					{
						check[this.id](this.id);
					};
				}
			}
		}

		return false;    
        };
    
	myForm.onreset = function()
	{
		for (var i = 0 ; i < inputsLength ; i++)
		{
			if (inputs[i].type == 'text')
			{
				inputs[i].className = '';
			}
		}
		deactivateTooltips();
    
	};
});
