// clock
class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
      this.seconds++;
      if(this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if(this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
      if(this.hours > 23) {
        this.hours = 0;
      }
      this.printTime();
  }
}

// const clock = new Clock();

// addNumbers
//
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function(sum, numsLeft, completionCallback) {
  if(numsLeft > 0) {
    reader.question('Input and number:', (result) => {
      result = parseInt(result);
      sum += result;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    // console.log(`Total Sum:${sum}`);
    completionCallback(sum);
    reader.close();

  }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// absurd bubble sort

const absurdBubbleSort = function(arr, sortCompletionCallback) {


  const outerBubbleSortLoop = function(madeAnySwaps) {
    if(madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps = false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  };

  innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
};

const askIfGreaterThan = function(el1,el2,callback) {
  reader.question(`Is ${el1} greater than ${el2}`, (result) =>{
    if(result === 'yes'){
      callback(true);
    }
    else if(result === 'no'){
      callback(false);
    }
  });
};

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if(isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if(i === arr.length - 1) { outerBubbleSortLoop(madeAnySwaps); }
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// bind function

Function.prototype.myBind = function(context){
  return () => {this.apply(context);};
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
