
function parseJSON() {
    var pokedex = 
    
    
       {
        "img":"imgs/1.png",
        "Nombre":"Bulbasaur",
        "Preevolucion":"Ninguna2",
        "Descripcion":"Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        "Preevolucion2":"Bulbasaur2"
    }

       document.getElementById("evol").innerHTML = pokedex.Preevolucion
       document.getElementById("evol2").innerHTML = pokedex.Preevolucion2
       document.getElementById("evol3").innerHTML = pokedex.Preevolucion2
       document.getElementById("evol4").innerHTML = pokedex.Preevolucion2
       document.getElementById("evol5").innerHTML = pokedex.Preevolucion2
       document.getElementById("evol6").innerHTML = pokedex.Preevolucion2
       document.getElementById("evol7").innerHTML = pokedex.Preevolucion2
    }