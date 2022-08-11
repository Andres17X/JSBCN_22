
const pokemonJson = [
   {
          "id": "001",
          "img":"imgs/1.png",
          "Nombre":"Bulbasaur",
          "Preevolucion":"Ninguna2",
          "tipo": "planta",
          "Descripcion":"Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo."
      },
      {
         "id": "002",
         "img":"imgs/2.png",
          "Nombre":"Ivysaur",
          "Preevolucion":"Bulbasaur2",
          "tipo": "planta",
          "Descripcion":"Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras"
      },
      {
         "id": "003",
         "img":"imgs/3.png",
          "Nombre":"Venusaur",
          "Preevolucion":"Ivysaur2",
          "tipo": "planta",
          "Descripcion":"La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol."
      },
      {
         "id": "004",
          "img":"imgs/4.png",
          "Nombre":"Charmander",
          "Preevolucion":"Ninguna",
          "tipo": "fuego",
          "Descripcion":"Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola."
      },
      {
         "id": "005",
          "img":"imgs/5.png",
          "Nombre":"Charmeleon",
          "Preevolucion":"Charmander",
          "tipo": "fuego",
          "Descripcion":"Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras."
      },
      {
         "id": "006",
          "img":"imgs/6.png",
          "Nombre":"Charizard",
          "Preevolucion":"Charmeleon",
          "tipo": "fuego",
          "Descripcion":"Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer."
      },
      {
         "id": "007",
          "img":"imgs/7.png",
          "Nombre":"Squirtle",
          "Preevolucion":"Ninguna",
          "tipo": "agua",
          "Descripcion":"Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble."
      },
      {
         "id": "008",
          "img":"imgs/8.png",
          "Nombre":"Wartortle",
          "Preevolucion":"Squirtle",
          "tipo": "agua",
          "Descripcion":"Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón."
      },
      {
         "id": "009",
          "img":"imgs/9.png",
          "Nombre":"Blastoise",
          "Preevolucion":"Wartotle",
          "tipo": "agua",
          "Descripcion":"Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón."
      }
   ]

function parseJSON() {

   console.log(pokemonJson)

   let cartasPokemon = document.querySelector('.cartas-pokemon')
   //  var pokedex = 
    
    
   //     {
   //      "img":"imgs/1.png",
   //      "Nombre":"Bulbasaur",
   //      "Preevolucion":"Ninguna2",
   //      "Descripcion":"Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
   //      "Preevolucion2":"Bulbasaur2"
   //  }

      pokemonJson.map(pokemon => {
         let div = document.createElement('div')
         // div.setAttribute('class', 'carta-pokemon')
         // div.setAttribute('class', `tipo-${pokemon.tipo}`)
         div.classList.add('carta-pokemon', `tipo-${pokemon.tipo}`, pokemon.id === '001' ? 'abierto' : 'no-abierto')
         div.setAttribute('id', `carta-${pokemon.Nombre}`)

         let divCartaTop = document.createElement('div')
         divCartaTop.setAttribute('class', 'carta-top')

         let divDetalles = document.createElement('div')
         divDetalles.setAttribute('class', 'detalles')

         let detallesName = document.createElement('h2')
         detallesName.setAttribute('class', 'name')
         detallesName.innerHTML = pokemon.Nombre

         let detallesId = document.createElement('span')
         detallesId.innerHTML = `#-${pokemon.id}`

         divDetalles.append(detallesName)
         divDetalles.append(detallesId)

         let spanTipo = document.createElement('span')
         spanTipo.setAttribute('class', 'tipo')
         detallesName.innerHTML = pokemon.tipo

         let cartaImagen = document.createElement('div')
         cartaImagen.setAttribute('class', 'carta-imagen')

         let imagenPokemon = document.createElement('img')
         imagenPokemon.setAttribute('alt', pokemon.Nombre)
         imagenPokemon.setAttribute('src', pokemon.img)

         cartaImagen.append(imagenPokemon)

         divCartaTop.append(divDetalles)
         divCartaTop.append(spanTipo)
         divCartaTop.append(cartaImagen)

         div.append(divCartaTop)




         cartasPokemon.append(div)

         /*
          <div class="carta-pokemon tipo-planta abierto" id="carta-bulbasaur">
                <div class="carta-top">
                    <div class="detalles">
                        <h2 class="name">Bulbasaur</h2>
                        <span>#001</span>
                    </div>

                    <span class="tipo">planta</span>

                    <div class="carta-imagen">
                        <img src="imgs/Bulbasaur carta.png" alt="bulbasaur" />
                    </div>
                </div>
                
                <div class="carta-informacion">
                    <div class="status">
                        <h3>Preevolución</h3>

                        <p id="evol">Ninguna</p>
                    </div>

                    <div class="habilidades">
                        <h3>Descripcion</h3>
                        <p>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
                    </div>
                </div>
             </div>
          */
         // document.getElementById("evol").innerHTML = pokemon.Preevolucion
      })
       
      //  document.getElementById("evol2").innerHTML = pokedex.Preevolucion2
      //  document.getElementById("evol3").innerHTML = pokedex.Preevolucion2
      //  document.getElementById("evol4").innerHTML = pokedex.Preevolucion2
      //  document.getElementById("evol5").innerHTML = pokedex.Preevolucion2
      //  document.getElementById("evol6").innerHTML = pokedex.Preevolucion2
      //  document.getElementById("evol7").innerHTML = pokedex.Preevolucion2

    }