// class TowersOfHanoi {
// }
//
// // const readline = require('readline');
// //
// // const reader = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

class Game {
  constructor(){
    this.stacks = [[1,2,3],[],[]];
  }
  run(reader, completionCallback) {
    /*
    until a player wins
    prompt player for move
    make move if valid move
    */
    this.print();
    this.promptMove(reader, this.isWon.bind(this), completionCallback);
  }
  promptMove(reader, callback, completionCallback) {
    reader.question('Select tower to move from', (startTowerIdx) => {
      reader.question('Select tower to move to', (endTowerIdx) => {
        this.move(startTowerIdx, endTowerIdx);
        this.print();
        if(callback()) {
          console.log("Congratz, YOU WINNNNN!");
          completionCallback();
        }
        else {
          this.promptMove(reader, callback, completionCallback);
        }
      });
    });
  }
  isValidMove(startTowerIdx, endTowerIdx) {
    if(this.stacks[startTowerIdx].length === 0 ){
      return false;
    }
    if(this.stacks[startTowerIdx][0] > this.stacks[endTowerIdx][0]) {
      return false;
    }
    return true;
  }

  move(startTowerIdx, endTowerIdx) {
    if(this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].unshift(this.stacks[startTowerIdx].shift());
    }
    else {
      console.log("Invalid move!");
    }
  }

  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
      return true;
    }
    else {
      return false;
    }
  }
}

// module.exports = TowersOfHanoi;
module.exports = Game;
