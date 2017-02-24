const TOH = require("./towers_of_hanoi");
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const playGame = function() {
  reader.question("Enter Go to start game:", (go) => {
    if(go === 'Go') {
      const newGame = new TOH();
      newGame.run(reader, completionCallback => {
        reader.question("Play Again?", (yesNo) => {
          if(yesNo === "yes") {
            playGame();
          }
          else {
            reader.close();
          }
        });
      });
    }
  });
};

playGame();
