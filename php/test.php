<?php
//phpinfo();
/**
echo json_encode(strlen($_POST['name']));
echo json_encode(verifMail($_POST['email']));

function verifMail($adresse)
        {
                if(strlen($adresse)>254)
                {
                        return '<p>Votre adresse est trop longue.</p>';
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
**/



mail("ghislain.dugat@free.fr","toto1","toto1");
?>
