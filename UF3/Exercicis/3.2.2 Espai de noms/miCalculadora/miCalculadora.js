var miCalculadora = (function(){
    var operador1 = 8;
    var operador2 = 3;
    
    function sumar(){
        alert(operador1+operador2);
    }
    
    function restar(){
        alert(operador1-operador2);
    }
    
    function operacioRandom(){
        var x = Math.floor((Math.random() * 2));
        if(x==0){
            sumar();
        } else {
            restar();
        }
    }
    
    return {
        publicfuncio:operacioRandom
    } 
}());