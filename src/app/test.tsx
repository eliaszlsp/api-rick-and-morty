const data = [
    {
      "id": 174,
      "name": "Jerry 5-126",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (5-126)",
        "url": "https://rickandmortyapi.com/api/location/17"
      },
      "location": {
        "name": "Jerryboree",
        "url": "https://rickandmortyapi.com/api/location/44"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/174.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/174",
      "created": "2017-12-29T17:50:19.991Z"
    },
    {
      "id": 802,
      "name": "26 Years Old Morty",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/802.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/802",
      "created": "2021-11-02T13:12:42.408Z"
    }
  ];
  
  function filterNamesByName(input) {
    const filteredNames = data.filter(character => character.name.includes(input));
    return filteredNames.map(character => character.name);
  }
  
  const userInput = "Jerry";
  const filteredNames = filterNamesByName(userInput);
  console.log(filteredNames); // Output: ["Jerry 5-126"]
  