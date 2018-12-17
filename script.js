function morseDecode(input) {
  var morseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
  }

  var output = "";

  input = input.split(" ");

  var noOfSpace = 0;

  for (var i = 0; i < input.length; i++) {
    var mCode = input[i];

    if (mCode === " " || mCode === "") {
      noOfSpace++;
      if (noOfSpace === 3) {
        output += " ";
        noOfSpace = 0;
      }
    } else {
      const key = Object.keys(morseCode).find(key => morseCode[key] === mCode);
      output += key;
    }

  }

  return output;

}

function caesarEncode(input, shift) {

  var output = "";

  for (var i = 0; i < input.length; i++) {

    var mCode = input[i];
    
    if (mCode === " ") {
      output += mCode
    } else {
      mCode = mCode.charCodeAt();

      if (mCode >= 65 && mCode <=90) {
        mCode = (((mCode - 65) + shift) % 26) + 65
      } else if (mCode >= 97 && mCode <=122) {
        mCode = (((mCode - 97) + shift) % 26) + 97
      } else if (mCode >= 48 && mCode <= 57) {
        mCode = (((mCode - 48) + shift) % 26) + 48
      }

      output += String.fromCharCode(mCode);
      
    }

  }

  return output;
}

function caesarDecode(input, shift) {
 
  var output = "";

  for (var i = 0; i < input.length; i++) {

    var mCode = input[i];

    if (mCode === " ") {
      output += mCode
    } else {
      mCode = mCode.charCodeAt();
      
      if (mCode >= 65 && mCode <=90) {
        mCode = (((mCode - 65) + shift) % 26) + 65
      } else if (mCode >= 97 && mCode <=122) {
        mCode = (((mCode - 97) + shift) % 26) + 97
      } else if (mCode >= 48 && mCode <= 57) {
        mCode = (((mCode - 48) + shift) % 26) + 48
      }

      output += String.fromCharCode(mCode);
      
    }

  }

  return output;
}

// uncomment the relevant line
// run node script.js ARG_ONE ARG_TWO to test your functions
// var resultMorde = morseDecode(process.argv[2])

var shift = parseInt(process.argv[process.argv.length-1]);

var uInput = process.argv.slice(2, process.argv.length-1);

var input = "";

for (var i=0; i < uInput.length; i++) {
  input += uInput[i] + " "
}

// var resultCaesar = caesarEncode(input, shift);

var resultCaesar = caesarDecode(input, shift);
// console.log(resultMorse);

console.log(resultCaesar);