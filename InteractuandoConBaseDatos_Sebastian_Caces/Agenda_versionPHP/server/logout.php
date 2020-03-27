<?php

	include 'check_login.php';
	
	setcookie('IdUser',0);
	setcookie('Nombre','');
	header('Location: '.'../client/index.html');

 ?>
