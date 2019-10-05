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
};

function decode(expr) {
    let result = '';
    let tempResult = '';
    for (let i = 0; i < expr.length;) {
        let encodedMorzeKey = expr[i] + expr[i + 1];

        if (encodedMorzeKey === '**') {
            tempResult = '';
            i = i + 10;
        } else {
            if (encodedMorzeKey === '10') {
                tempResult = tempResult + '.';
            } else if (encodedMorzeKey === '11') {
                tempResult = tempResult + '-';
            }
            i = i + 2;
        }

        if (i % 10 === 0) {
            result += tempResult === '' ? ' ' : MORSE_TABLE[tempResult];
            tempResult = '';
        }
    }
    return result; 
}

module.exports = {
    decode
}