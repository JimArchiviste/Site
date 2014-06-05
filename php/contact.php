<?php
	if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']))
	{
		if(strlen($_POST['name']) > 4 && (verifMail($_POST['email'])) && ($_POST['message'] !== ''))
		{
			$sujet = "Remarques sur le site";

			$nom = $_POST['name'];
			$email = $_POST['email'];
			$message = $_POST['message'];
			$IP = $_SERVER["REMOTE_ADDR"];
			$connection = mysqli_connect("localhost", "root", "", "EMAIL");
			$req_pre = mysqli_prepare($connection, 'INSERT INTO EMAILS (nom, email, messages, IP) VALUES ( ?, ?, ?, ?)');
			mysqli_stmt_bind_param($req_pre, "ssss", $nom, $email, $message, $IP);
			$reponse = mysqli_stmt_execute($req_pre);
			$message_mail = "nom : " . $nom . " email : " . $email . " message : " . $message . " IP : " . $IP;
			mail("ghislain.dugat@free.fr", $sujet, $message_mail);
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
	}**/

?>
