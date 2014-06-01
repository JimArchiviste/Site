<?php
	if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']))
	{
		if(strlen($_POST['name']) > 4 && (verifMail($_POST['email'])) && ($_POST['message'] !== ''))
		{
			$reponse = 'Ok.';
			$sujet = "Demande de contact";

			$nom = $_POST['name'];
			$email = $_POST['email'];
			$message = $_POST['message'];
			mysql_connect("localhost", "root", "");
			mysql_select_db("EMAIL");
			$req = mysql_query("SELECT * FROM EMAILS");
			echo json_encode($req);
			mysql_query("INSERT INTO EMAILS VALUES($nom);");
			mysql_close();

			/**$entete = 'From: '.$_POST['email']."\r\n".
			'Reply-To: '.$_POST['email']."\r\n".
			'X-Mailer: PHP/'.phpversion();
			mail("ghislain.dugat@free.fr", "sujet", "message");**/
			//mail("ghislain.dugat@free.fr", $sujet, $message, $entete );
		}
		else
		{
			$reponse = 'Bad format.';
		}
	}
	else
	{
		$reponse = 'Error. Not everything arrived.';
	}
	 
	$array['reponse'] = $reponse;
	echo json_encode($array);

	function verifMail($adresse)
	{
		if(strlen($adresse)>254)
		{
			return false;
		}


		  //Caractères non-ASCII autorisés dans un nom de domaine .eu :

		$nonASCII='ďđēĕėęěĝğġģĥħĩīĭįıĵķĺļľŀłńņňŉŋōŏőoeŕŗřśŝsťŧ';
		$nonASCII.='ďđēĕėęěĝğġģĥħĩīĭįıĵķĺļľŀłńņňŉŋōŏőoeŕŗřśŝsťŧ';
		$nonASCII.='ũūŭůűųŵŷźżztșțΐάέήίΰαβγδεζηθικλμνξοπρςστυφ';
		$nonASCII.='χψωϊϋόύώабвгдежзийклмнопрстуфхцчшщъыьэюяt';
		$nonASCII.='ἀἁἂἃἄἅἆἇἐἑἒἓἔἕἠἡἢἣἤἥἦἧἰἱἲἳἴἵἶἷὀὁὂὃὄὅὐὑὒὓὔ';
		$nonASCII.='ὕὖὗὠὡὢὣὤὥὦὧὰάὲέὴήὶίὸόὺύὼώᾀᾁᾂᾃᾄᾅᾆᾇᾐᾑᾒᾓᾔᾕᾖᾗ';
		$nonASCII.='ᾠᾡᾢᾣᾤᾥᾦᾧᾰᾱᾲᾳᾴᾶᾷῂῃῄῆῇῐῑῒΐῖῗῠῡῢΰῤῥῦῧῲῳῴῶῷ';
		  // note : 1 caractète non-ASCII vos 2 octets en UTF-8


		$syntaxe="#^[\w-.]{1,64}@[[:alnum:]-.$nonASCII]{2,253}\.[[:alpha:].]{2,6}$#";

		if(preg_match($syntaxe,$adresse))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
/**
	function json_decode($content, $assoc=false) {
	require_once 'JSON.php';
	if ($assoc) {
	    $json = new Services_JSON(SERVICES_JSON_LOOSE_TYPE);
	}
	else {
	    $json = new Services_JSON;
	}
	return $json->decode($content);
	}


	function json_encode($content) {
	require_once 'JSON.php';
	$json = new Services_JSON;
	return $json->encode($content);
	}
**/
?>
