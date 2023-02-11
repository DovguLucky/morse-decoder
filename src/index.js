const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(exprStr) {


    let main = exprStr;
    let resultWord = '';
    let obj = {}
    let arr = [];
    let result = '';

    function morseNumber(strKey) {
        let arrKey = String(strKey).split('')
        let arrResultKey = []
        const zero = '0';
        arrKey.forEach(el => {
            if (el === '.') {
                result = result + '10'
            } else if (el === '-') {
                result = result + '11';
            }
        });
        for (let k = 0; k <= 10; k++) {
            arrResultKey = result.split('')
            if (arrResultKey.length < 10) {
                result = zero + String(result);
            }
        }
    }

    function decady(strDecady) {
        let d = strDecady;
        let arrDecady = d.split('');
        for (let m = 0; m <= arrDecady.length; m = 1) {
            let strTen = arrDecady.splice(0, 10).join('');
            if (arrDecady.length > 10 || arrDecady.length % 10 === 0) {
                for (let o in obj) {
                    if (strTen === obj[o]) {
                        resultWord = resultWord + o;
                    }
                }
                let arrStr = arrDecady.join('')
            } else if (arrDecady.length === 0) {
                for (let o in obj) {
                    if (strTen === obj[o]) {
                        resultWord = resultWord + o;
                    }
                }
            }
        }
    }
    for (let key in MORSE_TABLE) {
        morseNumber(key)
        obj[MORSE_TABLE[key]] = result;
        result = '';
    }
    obj[' '] = '**********';
    decady(main)
    return resultWord;
}

module.exports = {
    decode
}
