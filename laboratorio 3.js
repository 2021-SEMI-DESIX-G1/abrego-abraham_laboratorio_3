(function(){
    palindromo.addEventListener("submit",PALINDROMO);

    //document.getElementById('WORD-btn').addEventListener('click',

    function PALINDROMO()
    {
        var num = document.getElementById('NUMBER-input').value
        
        alert(palindromo(num)); 
    
        
        function palindromo(numero)
        {   
            //convertir a binario
            var binario = (parseInt(numero).toString(2));

            var resultado = "El numero \""+numero+"\" \n" + "En binario \""+binario+"\" \n";

            //convertir en arreglo
            var NumeroCadena = numero.split("");
            var NumeroReves = numero.split("").reverse();

            var binCadena = binario.split("");
            var binReves = binario.split("").reverse();

            //Comprobar si es palindromo
            var idemDEC = true;
            var idemBIN = true;

            for(i in NumeroCadena) 
            {
                if(NumeroCadena[i] == NumeroReves[i])
                {
                    //todo bien
                }
                else
                {
                    //si una es distinta, ya valió
                    idemDEC = false;
                }
            }

            for(i in binCadena) 
            {
                if(binCadena[i] == binReves[i])
                {
                    //todo bien
                }
                else
                {
                    //si una es distinta, ya valió
                    idemBIN = false;
                }
            }

            if(idemDEC == true && idemBIN == true) 
            {
                resultado += " es un palíndromo de doble base ";
            }
            else 
            {
                resultado += " no es un palíndromo";
            }

            if(idemBIN == false && idemDEC == true)
            {
                resultado += " en binario, pero si en Base 10";
            }
            if(idemDEC == false && idemBIN == true)
            {
                resultado += " en decimal, pero si en Base 2";
            }

            if(idemDEC == false && idemBIN == false)
            {
                resultado += " en ningún caso";
            }

            return resultado;
        }
    }
        
})();

(function(){
    cadena.addEventListener("submit",CONTADOR);

    function CONTADOR()
    {
        
        let wrd = document.getElementById('WORD-input').value

        alert(contador(wrd)); 
        //contador(wrd);

        function contador(word) {
            let objeto = {}; 
            for(let i in word){
                objeto[word[i]] = ( objeto[word[i]] || 0 ) + 1;
            }
            
            var result = Object.entries(objeto).map((key)=>["\n"+String(key)]);
            return result;
        }
    }
})();

(function(){
    bisiesto.addEventListener("submit",BISIESTO);

    function BISIESTO()
    {
        
        let yr = document.getElementById('YEAR-input').value

        alert(bisiesto(yr)); 

        function bisiesto(year) {
           
            var result = "El año " + year;

            if(year % 4 == 0 && year % 100 != 0){
                result += " es bisiesto";  
            }else{
                if(year % 100 == 0 && year % 400 == 0){
                    result += " es bisiesto"; 
                }else{
                    result += " no es bisiesto"; 
                }
            }

            return result;

        }
    }
})();

(function(){
    primos.addEventListener("submit",PRIMOS);

    function PRIMOS()
    {
        let prm = document.getElementById('PRIMO-input').value

        alert(primos(prm)); 

        function primos(primo) {
           
            let result = "Sumatoria de los numeros primos en " + primo +" es: \n";
            var sumatoria = 0;

            for(var i = 1; i <= primo; i++)
            {
              if(primoF(i)){
                  sumatoria += i;
              }
            }
            return result + (sumatoria+1);
        }

        function primoF(numero) {
            for (var i = 2; i < numero; i++) {
              if (numero % i === 0) {
                return false;
              }
            }
            return numero !== 1;
          }
    }
})();

function solonumeros (e)
{
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46";
    teclado_especial = false;
   
    for(var i in especiales)
    {
        if(key==especiales[i])
        {
            teclado_especial=true;
        }
    }

    if(numeros.indexOf(teclado)==-1 && !teclado_especial)
    {
        return false;
    }
}
