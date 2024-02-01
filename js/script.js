function elevado() {
    let op1 = parseInt(document.getElementById("num1").value);
    let op2 = parseInt(document.getElementById("num2").value);
    resultado = op1 ** op2;
    document.getElementById("resultado").innerHTML = "El resultado de: " + op1 +  " elavado a " + op2 + " es " + resultado;

}

function centigradosafahrenheit() {
    let n1 = parseInt(document.getElementById("cen").value);
    f = (n1 * 1.8) + 32;
    document.getElementById("f").innerHTML =  n1 +  "  Centigrados son  " + f + " Fahrenheit";

}

var arrayname = [];

function agregar() {
    let valor = document.getElementById("name");
    let nombres = document.getElementById("lista");
    console.log(valor.value.isEmpty);
    if (valor.value.length > 0) {
        arrayname.push(valor.value);
    }

    valor.value = "";

    console.log(arrayname);

    let html = "<label<ol>"

    arrayname.forEach((it) => {
        html += "<li>" + it + "</li>";
    });

    html += "</ol>"

    nombres.innerHTML = html;


}

function filtrar() {
    console.log("filtrar");
    let cont = parseInt(document.getElementById("cont").value);
    let filtrados = document.getElementById("filtracion");

    let filtracion = arrayname.filter((it) => {
        console.log(`filtro $it ${it.length} ${cont}`);
        console.log(it.length === cont)
        return it.length === cont
    });


    let html = "<ul>";
    filtracion.forEach((it) => {
        html += "<li>" + it + "</li>";
    });
    html += "</ol>";

    filtrados.innerHTML = html;

}

function calcularEdad() {
    
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    
    var fechaNacimientoObj = new Date(fechaNacimiento);

    
    var fechaActual = new Date();

    
    var diferenciaMilisegundos = fechaActual - fechaNacimientoObj;

   
    var edadEnAnios = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));

    
    document.getElementById("resultadoEdad").innerHTML = "Edad: " + edadEnAnios + " años";
}

function wordCount() {
    textoArea = document.getElementById("area").value;
    numeroCaracteres = textoArea.length;
    inicioBlanco = /^ /
    finBlanco = / $/
    variosBlancos = /[ ]+/g 
  
    textoArea = textoArea.replace(inicioBlanco,"");
    textoArea = textoArea.replace(finBlanco,"");
    textoArea = textoArea.replace(variosBlancos," ");
    textoAreaDividido = textoArea.split(" ");
    numeroPalabras = textoAreaDividido.length;
  
    tC = (numeroCaracteres==1)?" carácter":" caracteres";
    tP = (numeroPalabras==1)?" palabra":" palabras";
       
    

    document.getElementById("numerodePalabras").innerHTML = numeroCaracteres + tC +"\n" + numeroPalabras + tP;
    
   }


    var listaNumeros = new Array();
    function agregarNumero() {
        let nump = parseInt(document.getElementById("nump").value);
        listaNumeros.push(nump);
        document.getElementById("nump").value = "";
        let elemento = "<ul>";
        listaNumeros.forEach(x => elemento = elemento + "<li>" + x + "</li>");
        elemento = elemento + "</ul>"
        document.getElementById("numeros_listados").innerHTML = elemento;
    }

    function promedio() {
        let suma = 0;
        listaNumeros.forEach(x => suma += x)
        s = listaNumeros.length;
    /*
        for (let valor : listaNumero) {
            suma =+ valor
        }
    */
        document.getElementById("respuesta2").innerHTML = "La respuesta es " + suma/s;
    }
    
    function cambiarColor() {
        // Obtener el valor del campo de entrada
        var color = document.getElementById("colorInput").value;

        // Obtener el elemento del cuadro
        var cuadro = document.getElementById("cuadro");

        // Establecer el color del cuadro
        cuadro.style.backgroundColor = color;
    }
    