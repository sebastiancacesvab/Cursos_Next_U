var Calculadora = {
	LARGO_MAXIMO : 8
	
	, objDisplay : null
	, display : '0'
	, numEnMemoria : 0
	, operacion : null
	, ejecutoIgual : false
	, ultNumero : null
	, ultOperacion : null
	
	, efectoBoton : function(objNum) {
		objNum.addEventListener("mousedown", function(e){
			console.log('mousedown');
			objNum.style.transform = 'scale(0.9, 0.9)';
		});
		objNum.addEventListener("mouseup", function(e){
			console.log('mouseup');
			objNum.style.transform = 'scale(1, 1)';
		});
	}

	, botonNumero : function(digito) {
		var objNum = document.getElementById(digito);
		objNum.addEventListener("click", function(e){
			Calculadora.clickDigito(digito);
		});
		this.efectoBoton(objNum);
	}

	, botonOn : function() {
		var objNum = document.getElementById('on');
		objNum.addEventListener("click", function(e){
			Calculadora.clickOn();
		});
		this.efectoBoton(objNum);
	}

	, funcionPunto : function() {
		var objNum = document.getElementById('punto');
		objNum.addEventListener("click", function(e){
			Calculadora.clickPunto();
		});
		this.efectoBoton(objNum);
	}

	, inicioSigno : function() {
		var objNum = document.getElementById('sign');
		objNum.addEventListener("click", function(e){
			Calculadora.clickSign();
		});
		this.efectoBoton(objNum);
	}
	
	, inicializarOperacion : function(operacion) {
		var objNum = document.getElementById(operacion);
		objNum.addEventListener("click", function(e){
			Calculadora.clickOperacion(operacion);
		});
		this.efectoBoton(objNum);
	}

	, inicializarIgual : function() {
		var objNum = document.getElementById('igual');
		objNum.addEventListener("click", function(e){
			Calculadora.clickIgual();
		});
		this.efectoBoton(objNum);
	}
	

	, inicializar : function(){
		this.objDisplay = document.getElementById('display');		
		
		this.botonNumero('0');
		this.botonNumero('1');
		this.botonNumero('2');
		this.botonNumero('3');
		this.botonNumero('4');
		this.botonNumero('5');
		this.botonNumero('6');
		this.botonNumero('7');
		this.botonNumero('8');
		this.botonNumero('9');
		
		this.botonOn();
		this.funcionPunto();
		this.inicioSigno();
		
		this.inicializarOperacion('mas');
		this.inicializarOperacion('menos');
		this.inicializarOperacion('por');
		this.inicializarOperacion('dividido');
		this.inicializarIgual();
		
		this.clickOn();
		
		this.log ('calculadora inicializada');
	}

	, log : function(texto){
		//console.log (texto);
	}

	, clickDigito(digito) {
		this.log ('clickDigito: --------------------------------');
		this.log ('clickDigito: ejecutoIgual? = '+this.ejecutoIgual);
		
		if (this.ejecutoIgual) {
			this.clickOn();
		}		
		
		this.log ('clickDigito: display = '+this.display);
		this.log ('clickDigito: digito = '+digito);
		var largo = this.display.length;
		this.log ('clickDigito: largo = '+largo);
		
		if (this.display.indexOf('.')>=0){
			largo = largo - 1; //descontar punto
		}
		if (this.display.indexOf('-')>=0){
			largo = largo - 1; //descontar signo
		}
		this.log ('clickDigito: largo = '+largo);

		if (this.display == '0') {
			if (digito != '0') {
				this.display = digito;	
			}
		}
		else if (largo < this.LARGO_MAXIMO) {
			this.display = this.display + digito;
		}
		this.renderDisplay();
		this.log ('clickDigito: --------------------------------');
	}
	
	, clickOn : function() {
		this.log ('clickOn');
		this.display = '0';
		this.numEnMemoria = 0;
		this.operacion = null;
		this.ejecutoIgual = false;
		this.ultNumero = null;
		this.ultOperacion = null;		
		this.renderDisplay();
	}
	
	, clickPunto : function() {
		this.log ('clickPunto');
		if (this.display.indexOf('.') == -1) {
			this.display = this.display + '.';
		}
		this.renderDisplay();
	}
	
	, clickSign : function() {
		this.log ('clickSign');
		if (this.display != '0') {
			if (this.display.indexOf('-') == -1) {
				this.display = '-' + this.display;
			}
			else {
				this.display = this.display.substring(1);
			}
		}
		this.renderDisplay();
	}
	
	, ejecutaOperacion : function(numDisplay) {
		this.log ('ejecutaOperacion: --------------------------------');
		this.log ('ejecutaOperacion: numEnMemoria = '+this.numEnMemoria);
		this.log ('ejecutaOperacion: operacionAnterior = '+this.operacion);
		this.log ('ejecutaOperacion: numDisplay = '+numDisplay);
		
		if (this.operacion) {			
			if (this.operacion == 'mas') {
				this.numEnMemoria = this.numEnMemoria + numDisplay;	
			}
			else if (this.operacion == 'por') {
				this.numEnMemoria = this.numEnMemoria * numDisplay;	
			}
			else if (this.operacion == 'menos') {
				this.numEnMemoria = this.numEnMemoria - numDisplay;	
			}
			else if (this.operacion == 'dividido') {
				this.numEnMemoria = this.numEnMemoria / numDisplay;	
			}
			
			this.ultNumero = numDisplay;
			this.ultOperacion = this.operacion;
			
			this.log ('ejecutaOperacion: Se realiza operacion de ['+this.operacion+'] = ' + this.numEnMemoria);
		}
		
		this.ejecutoIgual = false;
		this.log ('ejecutaOperacion: --------------------------------');
	}
	
	, clickOperacion : function(operacionNueva) {
		this.log ('clickOperacion: --------------------------------');
		this.log ('clickOperacion: operacionNueva = '+operacionNueva);
		this.log ('clickOperacion: display = '+this.display);
		
		var numDisplay = parseFloat(this.display);
		this.log ('clickOperacion: numDisplay = '+numDisplay);
		
		if (this.operacion) {			
			this.ejecutaOperacion(numDisplay);
		}
		else {

			this.numEnMemoria = numDisplay;
		}
		
		this.operacion = operacionNueva;
		this.display = '0';
		
		this.renderDisplay();
		this.ejecutoIgual = false;
		this.log ('clickOperacion: numEnMemoria = '+this.numEnMemoria);
		this.log ('clickOperacion: --------------------------------');
	}
	
	, clickIgual : function() {
		this.log ('clickIgual: --------------------------------');
		this.log ('clickIgual: ejecutoIgual? = '+this.ejecutoIgual);
		
		if (this.ejecutoIgual) {
			if (this.ultNumero && this.ultOperacion) {
				this.log ('clickIgual: Repetir ultima ejecucion!!');
				this.operacion = this.ultOperacion;
				this.ejecutaOperacion(this.ultNumero);	
			}
		}
		else {
			this.log ('clickIgual: Ejecutar operacion Actual!!');
			var numDisplay = parseFloat(this.display);
			this.log ('clickIgual: display = '+this.display);
			this.ejecutaOperacion(numDisplay);
		}	
		
		
		//controlar largo del resultado
		var texto = ''+this.numEnMemoria;
		var cortarEn = this.LARGO_MAXIMO;
		if (texto.indexOf('-')>=0){
			cortarEn = cortarEn + 1;
		}
		if (texto.indexOf('.')>=0){
			cortarEn = cortarEn + 1;
		}
		if (texto.length > cortarEn) {
			texto = texto.substring(0, cortarEn);
			this.numEnMemoria = parseFloat(texto);
		}
		
		this.display = ''+this.numEnMemoria		
		this.operacion = null;
		this.renderDisplay();
		
		this.log ('clickIgual: numEnMemoria = '+this.numEnMemoria);
		
		this.ejecutoIgual = true;
		this.log ('clickIgual: --------------------------------');
	}
	
	, renderDisplay : function() {
		this.objDisplay.innerHTML = this.display;
	}
}

Calculadora.inicializar();