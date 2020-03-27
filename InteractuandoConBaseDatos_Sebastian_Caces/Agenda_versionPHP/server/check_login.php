<?php

	include 'conexion.php';
		
	$UserName = $_POST['username'];
	$Password = "".$_POST['password'];
	
	function IniciarSesion(){
		
		$Retorno="";
		Conectar();
		$IdUser=0;
		$Nombre="";
		$Consulta="SELECT * FROM usuario WHERE Username='".$GLOBALS['UserName']."'";
		$Resultado= $GLOBALS['Conexion']->query($Consulta);
		if($Resultado == null){
			$Retorno="Sin Resultados";
		}
		else if(mysqli_num_rows($Resultado)==0)
		{
			$Retorno="Usuario o Password incorrecta.";
		}
		else
		{
			while ($fila = mysqli_fetch_array($Resultado))
			{
				$passwordHash = "".$fila['Password'];
				$verificada = password_verify($GLOBALS['Password'], $passwordHash);
				if($verificada)
				{
					$IdUser=$fila['Id'];
					$Nombre=$fila['Nombre'];
					session_start();
					$_SESSION["IdUser"]= $IdUser;
					setcookie('IdUser',$IdUser);
					setcookie('Nombre',$Nombre);
					$Retorno="OK";
					$GLOBALS['Password'] = null;
				}
				else
				{
					$Retorno="Password incorrecta.";
				}
			}
		}
		Desconectar();
		$respuesta['msg'] = $Retorno;
		echo json_encode( $respuesta );
	}


	IniciarSesion();
 ?>
