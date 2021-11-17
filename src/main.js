/**
 * 1. Requisição assíncrona com fetch
 * 2. Espera o retorno da requisição acontecer, e pega a resposta de dentro do then
 * 3. Iterar e parsear os dados depois que você pegou o retorno do fetch -> utilizar o loop for
 * 4. Para cada iteração dentro do seu loop, você vai ter acesso a cada pokemon da lista
 * Então para cada pokemon, você deve conseguir acessar as informações: id, name, img, type
 * id: tipo integer
 * name: tipo string
 * img: tipo string
 * type: tipo array de string -> aqui você vai precisar criar um novo loop para conseguir acessar de forma dinâmica cada tipo daquele pokemon
 */

/**
 * Conceitos de alguns tipos de dados mais complexos
 * Array: const varArray = []
 * Object: const varObject = {}
 * 
 * Como acessar os dados
 * Array: varArray[número da posição] -> lembrando que a primeira posição é 0
 * Object: varObject.propriedade ou varObject['propriedade-as-string']
 */


/**
 * Variável global de dicionário de tipos de pokemons possíveis
 * Para acessar o item é só dar um typeDictionary[type]
 * Onde 'type' é uma variável de valor string
 * Exemplo:
 * typeDictionary['Grass']
 */
const typeDictionary = {
  Grass: "#77C750",
  Poison: "#4f3a56",
  Fire: "#f75231",
  Flying: "#9cadf7",
  Water: "#4fa7ff",
  Bug: "#adbd21",
  Normal: "#ada594",
  Electric: "#fec634",
  Ground: "#b49343",
  Fighting: "#a55239",
  Psychic: "#ee6f9c",
  Rock: "#bda55a",
  Ice: "#67d2e9",
  Ghost: "#6363b5",
  Dragon: "#9987eb",
};

fetch("./src/pokemon.json")
  .then(response => response.json())
  .then(data => {
    const pokemonList = data.pokemon;
    console.log(pokemonList);

    for (let index = 0; index < pokemonList.length; index++) {
      console.log(pokemonList[index]);

      const id = pokemonList[index].id;
      const name = pokemonList[index].name;
      const img = pokemonList[index].img;
      const type = pokemonList[index].type;
      const thisPokemonTypeRelation = {};

      console.log(id);
      console.log(name);
      console.log(img);
      console.log(type);

      /**
       * Criar um novo for aqui onde você irá iterar sobre o array 'type'
       * E para cada type do pokemon, você deve pegar a cor de dentro do typeDictionary
       * Salvar essa relação de tipo e cor do pokemon em que você está iterando para depois criar o elemento
       * de acordo com o tipo x cor certa
       */
      

      /**
       * Aqui no final do loop do pokemon a gente vai construir o elemento HTML de card
       * Ou seja, para cada pokemon que estamos iterando vamos ao mesmo tempo que parseamos o dado, 
       * vamos construir o elemento HTML aqui dentro do código mesmo
       * E depois, vamos dar um append dentro de um container no nosso HTML (index.html) de fato
       */
    }

    
  });