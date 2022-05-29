
   
    
   
    

     <?php
     
    $texte='success';  
    $non_success ="<p>Désolé, nous avons rencontré un probleme</p>";

    if(isset($_POST['message'])){
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";


        $objet = htmlspecialchars($_POST["msg_subject"]);

        $contenu = '<h1>Message envoyé par la page Contact du site Care In Coloc</h1>
        <p><b>Prénom : </b>'. htmlspecialchars($_POST['prenom']) .'<br>
        <b>Nom : </b>' . htmlspecialchars($_POST['name']) . '<br>       
        <b>Email : </b>' . htmlspecialchars($_POST['email']) . '<br>
        <b>Téléphone : </b>' . htmlspecialchars($_POST['telephone']) . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

        $destinaires = 'patrickannoot@orange.fr,care.in.coloc@gmail.com';

        $retour = mail($destinaires,$objet , $contenu, $entete);

        if($retour) {
            echo $texte;
        }
        else{
            echo $non_success ;
        }
    }
    ?>

   
