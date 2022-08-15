function parseJSON() {
var pokedex = [
    {
           "img":"imgs/1.png",
           "Nombre":"Bulbasaur",
           "Preevolucion":"Ninguna",
           "Descripcion":"Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo."
       }
    ]
    var value = eval(pokedex);
    document.getElementById("evol").innerHTML = pokedex.Preevolucion

}