const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' '
};

function decode(expr) {
    let res = "";

    for(let i = 0; i < expr.length; i += 10) {
        let morseChar = toMorseChar(expr.substring(i, i + 10));
        let char = MORSE_TABLE[morseChar];
        res += char;
    }
    return res;
}

const toMorseChar = function(encoded) {
    if(encoded === "**********") {
        return " ";
    } else {
        let res = "";
        const trimmed = encoded.replace(/^0+/g, "");

        for(let i = 0; i < trimmed.length; i += 2) {
            let part = trimmed.substring(i, i + 2);
            res += (part === "11" ? "-" : ".");
        }
        return res;
    }
}

module.exports = {
    decode
}