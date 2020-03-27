<?php

	include 'conexion.php';
	$ID=$_POST['id'];

	
	
	function EliminarEvento(){
		Conectar();
		$Consulta = "DELETE FROM evento WHERE Id=".$GLOBALS['ID'];
	
		if ($GLOBALS['Conexion']->query($Consulta) === TRUE) {
			echo json_encode(array("msg"=>"OK"));
		} else {
			echo json_encode(array("msg"=>"Error al eliminar el evento"));
		}
		Desconectar();
	}
	
	EliminarEvento();

 ?>
