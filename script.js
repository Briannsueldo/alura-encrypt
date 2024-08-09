
const alphabet = {
    'a': 'h6/', 'b': 'j3#', 'c': 'k9$', 'd': 'l2%', 'e': 'm5&',
    'f': 'n8*', 'g': 'o1(', 'h': 'p4)', 'i': 'q7-', 'j': 'r0_',
    'k': 's2+', 'l': 't5@', 'm': 'u8!', 'n': 'v1$', 'ñ': 'k4?',
    'o': 'w4^', 'p': 'x7*', 'q': 'y0(', 'r': 'z3¿', 's': 'a6-',
    't': 'b9_', 'u': 'c2+', 'v': 'd5@', 'w': 'e8!', 'x': 'f1$',
    'y': 'g4^', 'z': 'h7*',
};

const decryptAlphabet = {
    'h6/': 'a', 'j3#': 'b', 'k9$': 'c', 'l2%': 'd', 'm5&': 'e',
    'n8*': 'f', 'o1(': 'g', 'p4)': 'h', 'q7-': 'i', 'r0_': 'j',
    's2+': 'k', 't5@': 'l', 'u8!': 'm', 'v1$': 'n', 'k4?': 'ñ',
    'w4^': 'o', 'x7*': 'p', 'y0(': 'q', 'z3¿': 'r', 'a6-': 's',
    'b9_': 't', 'c2+': 'u', 'd5@': 'v', 'e8!': 'w', 'f1$': 'x',
    'g4^': 'y', 'h7*': 'z',
};



//

let inputArea = document.getElementById('input-text');
let outputArea = document.getElementById('output-text');

let btnEncrypt = document.getElementById('encrypt-btn');
let btnDecrypt = document.getElementById('decrypt-btn');

outputArea.setAttribute('readonly', true);

function encrypt() {
    let textToEncrypt = inputArea.value.toLowerCase();
    let encryptedText = '';

    for(let letter of textToEncrypt) {
        encryptedText += alphabet[letter] || letter;
    };

    outputArea.textContent = encryptedText;

    outputStyle();
};

function decrypt() {
    let textToDecrypt = inputArea.value;
    let decryptedText = '';
    let currentSubstring = '';
    
    for (let i = 0; i < textToDecrypt.length; i++) {
        let character = textToDecrypt[i];

        if (character === ' ') {
            decryptedText += ' ';
            continue;
        }

        currentSubstring += character;
    
        if (decryptAlphabet[currentSubstring]) {
            decryptedText += decryptAlphabet[currentSubstring];
            currentSubstring = '';
        }
    }
    
    if (currentSubstring) {
        decryptedText += currentSubstring;
    }
    
    outputArea.textContent = decryptedText;

    outputStyle();
};


btnEncrypt.addEventListener('click', encrypt);

btnDecrypt.addEventListener('click', decrypt);

inputArea.addEventListener('focus', () => {
    inputArea.classList.add('focus-textarea');
    inputArea.textContent = '';
    inputArea.style.color = 'var(--main-black)';
})

inputArea.addEventListener('blur', () => {
    inputArea.classList.remove('focus-textarea');
});

function outputStyle() {
    if (outputArea.textContent !== '') {
        outputArea.addEventListener('focus', () => {
            outputArea.classList.add('focus-textarea');
        })
        
        outputArea.addEventListener('blur', () => {
            outputArea.classList.remove('focus-textarea');
        });
    }
}

function guideText() {
    if (inputArea.textContent == '') {
        inputArea.textContent = 'Introduce el texto aqui';
        inputArea.style.color = 'var(--second-white)';
    }
};

guideText();