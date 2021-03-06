const fs = require('fs'); // necesitado para guardar/cargar educards
const educardsMod = require('./educards'); // importamos el modulo educards

// Retorna una instancia de Educards. Si existe filename, recupera la instancia desde el archivo.
function getEducards(filename = 'data.json') {
  let educards = new educardsMod.Educards();
  if (fs.existsSync(filename)) {
    educards = educardsMod.Educards.load(filename);
  }
  return educards;
}

function saveEducards(educards, filename = 'data.json') {
  educards.save(filename);
}


function main() {
  
  console.log('arguments: ');
  process.argv.forEach(argument => console.log(argument));

  const args = process.argv.slice(2);

  // Agregar una carta
  if (args[0] === 'addCard')
  {
    const educards = getEducards();
    educards.addCard(
      {
        tittle: args[1],
        story: args[2],
        year: args[3],
      }
    );
    saveEducards(educards);
    console.log('Card successfully added.');
  }

  // Eliminar una carta
  if (args[0] === 'removeCard'){
    const educards = getEducards();
    educards.removeCard(args[1]);
    saveEducards(educards);
    console.log('Card successfully removed.');
  }

  // Listar todas las cartas
  if (args[0] === 'getCards')
  {
    const educards = getEducards();
    educards.getCards();
    console.log("All the playing cards:");
    console.log(educards.getCards());
    saveEducards(educards);
  }

  // Listar todos los jugadores
  if (args[0] === 'getPlayers')
  {
    const educards = getEducards();
    educards.getPlayers();
    console.log("All the players:");
    console.log(educards.getPlayers());
    saveEducards(educards);
  }

  // Registrar un jugador
  if (args[0] === 'addPlayer')
  {
    const educards = getEducards();
    educards.addPlayer(
      {
        name: args[1],
        age: args[2],
        image: args[3],
        password: args[4],
      }
    );
    saveEducards(educards);
    console.log('Player successfully added.');
  }

  // Eliminar un jugador
  if (args[0] === 'removePlayer')
  {
    const educards = getEducards();
    educards.removePlayer(args[1]);
    saveEducards(educards);
    console.log('Player successfully removed.');
  }

  // Editar un jugador
  if (args[0] === 'editPlayer')
  {
    const educards = getEducards();
    educards.editProfile(args[1], args[2], args[3], args[4]);
    saveEducards(educards);
    console.log('Player successfully edited.');
  }

    // Pedir numero aleatorios
    if (args[0] === 'play')
    {
      const educards = getEducards();
      const result = educards.getPlayingCards(args[1]);
      console.log(result);
    }
}

main();
