import cipher from './cipher.js';


    document.getElementById("cifrar").addEventListener("click", function(e){
        e.preventDefault()
        let texto = (document.getElementById("mensaje").value).toUpperCase();
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.encode(texto, desplazamiento);
    });

    document.getElementById("descifrar").addEventListener("click", function(e){
        e.preventDefault()
        let textoCifrado = document.getElementById("mensaje2").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje").value = cipher.decode(textoCifrado, desplazamiento);
    });





