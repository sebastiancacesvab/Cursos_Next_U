<?php

	$host = "localhost";
	$user = 'root';
	$password = '';
	$BaseDatos = 'test_next_u';
	$Conexion;
	function Conectar(){
		try{
			$GLOBALS['Conexion'] = mysqli_connect($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['password'], $GLOBALS['BaseDatos']);
		}
		catch(PDOException $e){
			echo 'Conectado eeror';
		}	
	}

	function  Desconectar(){
		$GLOBALS['Conexion']->close();
	}

?>
