const listaSelecionPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.carta-pokemon')


listaSelecionPokemons.forEach(pokemon => {
    

    pokemon.addEventListener('click', () => {

  
        const cartaPokemonAberto = document.querySelector('.abierto')
        cartaPokemonAberto.classList.remove('abierto')
      
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idPokemonSelecionadoCapitaliced = idPokemonSelecionado.charAt(0).toUpperCase() + idPokemonSelecionado.slice(1);

        const cartaPokemonParaAbrir = document.getElementById(`carta-${idPokemonSelecionadoCapitaliced}`)
        console.log(`carta-${idPokemonSelecionado.toUpperCase()}`)
        cartaPokemonParaAbrir.classList.add('abierto')

        const pokemonActivoenLista = document.querySelector('.activo')
        pokemonActivoenLista.classList.remove('activo')

 
        const pokemonSelecionadoenLista = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoenLista.classList.add('activo')
    })
})


  function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
  audio.volume = 0.05;
}
