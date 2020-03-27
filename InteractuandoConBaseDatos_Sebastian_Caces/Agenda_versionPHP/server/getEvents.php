<?php

	include 'conexion.php';
	
	
	
	function ObtenerEventos(){
		$Eventos="";
		Conectar();
		session_start();
		$usuarioID=$_SESSION['IdUser'];
		$Consulta="SELECT * FROM evento WHERE IdUsuario=".$usuarioID;
		$Resultado= $GLOBALS['Conexion']->query($Consulta);
		$salida="";
		 while ($fila = mysqli_fetch_array($Resultado)){
			if(empty($Eventos)){
				$Eventos="[".json_encode(array("id"=> $fila['Id'], "title"=> $fila['Titulo'], "start"=> $fila['FechaInicio']." ". $fila['HoraInicio'], "allDay"=> $fila['DiaCompleto'], "end"=> $fila['FechaFinalizacion']." ".$fila['HoraFinalizacion']));
			}else{
				$Eventos=$Eventos.",".json_encode(array("id"=> $fila['Id'], "title"=> $fila['Titulo'], "start"=> $fila['FechaInicio']." ". $fila['HoraInicio'], "allDay"=> $fila['DiaCompleto'], "end"=> $fila['FechaFinalizacion']." ".$fila['HoraFinalizacion']));
			}
		}
		if(!empty($Eventos)){
			$Eventos="{\"eventos\":".$Eventos."], \"msg\":\"OK\"}";
		}
		else{
			$Eventos="{\"msg\":\"OK\"}";
		}
		Desconectar();
		
		echo $Eventos;
	}


	ObtenerEventos();
 ?>
