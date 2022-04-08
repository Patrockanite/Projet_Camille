
   
    
   
    

     <?php
    if(isset($_POST['message'])){
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";

        $objet = htmlspecialchars($_POST["msg_subject"]);

        $contenu = '<h1>Message envoyé par la page Contact du site Car in Coloc</h1>
        <p><b>Prénom : </b>'. htmlspecialchars($_POST['prenom']) .'<br>
        <b>Nom : </b>' . htmlspecialchars($_POST['name']) . '<br>       
        <b>Email : </b>' . htmlspecialchars($_POST['email']) . '<br>
        <b>Téléphone : </b>' . htmlspecialchars($_POST['telephone']) . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

        $retour = mail('patrickannoot@orange.fr',$objet , $contenu, $entete);

        if($retour) {
            echo 'success';
        }
        else{
            echo '<p>Désolé, nous avons rencontré un problème<br>
            Vous pouvez appeler le <a href="tel:0627707874">0627707874</a></p>';
        }
    }
    ?>

   
