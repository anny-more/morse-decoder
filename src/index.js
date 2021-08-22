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
    // write your solution here
    let array = []
    for (let i = 10; i <= expr.length; i += 10) {
         array.push(expr.slice(i - 10, i));
    };
    const resultArray = [];
    for (const item of array) {
        let result = '';
        
        for (let i = 2; i < 13; i += 2) {
            let substr = item.slice(i  - 2, i);
            switch (substr) {
                case '10' :
                    result = `${result}.`;
                    break;
                case '11' :
                    result = `${result}-`;
                    break;
                case '00' :
                    result = `${result}`;
                    break;
                case '**' :
                    result = ` `;
                    break;
            }
        }
       resultArray.push(result);
    }
    const decodeArray = resultArray.map((item) => (item === ' ' ? item : MORSE_TABLE[item]));
    return decodeArray.join('');
}

module.exports = {
    decode
}