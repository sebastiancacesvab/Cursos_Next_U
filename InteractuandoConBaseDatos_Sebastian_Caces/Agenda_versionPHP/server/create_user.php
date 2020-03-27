<?php


	include 'conexion.php';
	
	CrearUsuario(100,"prueba@prueba.com","123456","Juan Pablo Gonzalez", '1990-01-01');
	CrearUsuario(200,"prueba1@prueba.com","123456","Eiron Mendoza Puebla", '1990-01-02');
	CrearUsuario(300,"prueba2@prueba.com","123456","Luciano Pino Pino", '1990-01-03');
	
	function CrearUsuario($Id,$Username,$Password,$Nombre, $FechaNacimiento){
		Conectar();
		$Consulta = "SELECT * FROM usuario WHERE Username='".$Username."'";
		$Resultado = mysqli_num_rows($GLOBALS['Conexion']->query($Consulta));
		
		if($Resultado==0){
			$Consulta = "INSERT INTO usuario (Id, Username, Password, Nombre, FechaNacimiento) VALUES ('".$Id."', '".$Username."', '".password_hash($Password, PASSWORD_BCRYPT)."' , '".$Nombre."', '".$FechaNacimiento."' )";
		
			if ($GLOBALS['Conexion']->query($Consulta) === TRUE) {
				echo "Usuario ".$Username." creado.<br/>";
			} else {
				echo "Error: " . $sql . "<br>" . $GLOBALS['Conexion']->error;
			}
		}
		Desconectar();
	}


 ?>
