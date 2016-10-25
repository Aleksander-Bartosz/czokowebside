var Furry = function () {
    this.x = 0;
    this.y = 0;
    this.directionArray=[1,0];
    this.board = document.querySelectorAll('#board div');
	
    //bardzo istotna linijka by zrozumieć kolejność wywołania gdy odpalasz new Furry na evencie DOM Content Loaded - jest to pierwsza funkcja "rozruchowa" przy wowołaniu obiektu. (konstruktor) 
    this.addEventListeners();
    //metoda do napisania do Ciebie - jeśli Furry ma się w określonym czasie sam poruszać w zależności od this.directionArray ;)
    this.setAutoMovement();
	this.setCoin();
}

Furry.prototype.addEventListeners = function() {
	// nie możesz bezpośrednio odwoływać się do funkcji przy korzystaniu z addEventListener - oczekuje drugiego parametru, który będzie funkcją anonimową (czyli bez nazwy - 'function ()' jest różne od 'function NazwaFunkcji()'') 
	document.addEventListener("keydown", function(event) {
		//dlaczego tak? http://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to
		this.moveFurry(event);
	}.bind(this));  
}

function direction(x, y) {
	return x+y*10;
}

Furry.prototype.moveFurry = function(event) {
	
	switch(event.which) {
	    case 37:
			event.preventDefault();
	        this.directionArray = [-1,0];
			
	    break;
	    case 38:
			event.preventDefault();
	        this.directionArray = [0,-1];
	    break;
	    case 39:
			event.preventDefault();
	        this.directionArray = [1,0];
	    break;
	    case 40:
			event.preventDefault();
	        this.directionArray = [0,1];
	    break;     
	 }
}
Furry.prototype.setAutoMovement = function () {
	var score =  document.querySelector('.score');
	var move = setInterval(function() {
		for (var i = 0; i < this.board.length; i++) {
            if (this.board[i].classList.contains("furry")) {
                this.board[i].classList.remove("furry");
				
            }
        }
		this.x = this.x+this.directionArray[0];
		this.y = this.y+this.directionArray[1];
		if (this.y>9) {
			this.y=0;
		}
		else if (this.x>9) {
			this.x=0;
		}
		else if (this.x<0) {
			this.x=9;
		}
		else if (this.y<0) {
			this.y=9;
		}
		console.log(Number(score.textContent)+Number(1))
		var furryDraw = direction(this.x,this.y)
		if (this.board[furryDraw].classList=='coin') {
			this.board[furryDraw].classList.remove('coin');
			this.setCoin();
			score.innerHTML=Number(score.textContent)+1;
		}
		this.board[furryDraw].classList.add('furry');
	}.bind(this),200)
	Furry.prototype.direction = function(x, y) {
	return x+y*10;
}
}
Furry.prototype.setCoin = function () {
	var x=Math.floor(Math.random() * 10);
    var y=Math.floor(Math.random() * 10);
	
    var position = direction(x,y);
	 if(this.board[position].classList=='furry') {
                position = direction(x,y);
            }
     this.board[position].classList.add('coin');
 }
 
document.addEventListener('DOMContentLoaded', function () {

	new Furry();
	
});