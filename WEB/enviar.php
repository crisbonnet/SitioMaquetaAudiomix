<?php

$nombre = $_POST["nombre"];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$destinatario = "papelplegado@gmail.com";
$asunto = "Contacto desde nuestra web";

$contenido = "De: ".$nombre. "\n";
$contenido .= $apellido \n;
$contenido .= "Correo: $correo \n";
$contenido .= "Mensaje: $mensaje";

mail($destinatario, $asunto, $contenido);
header("Location:mensaje-de-envio.html");


 ?>
