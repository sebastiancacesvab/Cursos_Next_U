<?php

include 'conexion.php';
	
	
	
	$ID=$_POST['id'];
	$FechaInicio=$_POST['start_date'];
	$FechaFinal=$_POST['end_date'];
	$HoraFinal=$_POST['end_hour'];
	$HoraInicial=$_POST['start_hour'];
	
	
	
	function CrearEvento(){
		Conectar();
		$Consulta = "UPDATE evento SET FechaInicio='".$GLOBALS['FechaInicio']."', HoraInicio='".$GLOBALS['HoraInicial']."', FechaFinalizacion='".$GLOBALS['FechaFinal']."', HoraFinalizacion='".$GLOBALS['HoraFinal']."'
		WHERE Id=".$GLOBALS['ID'];
		
		if ($GLOBALS['Conexion']->query($Consulta) === TRUE) {
			echo json_encode(array("msg"=>"OK"));
		} else {
			echo json_encode(array("msg"=>"Error al actualizar el evento"));
		}
		
		Desconectar();
	}

	CrearEvento();
 ?>
