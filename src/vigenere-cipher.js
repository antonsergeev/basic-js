const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirectMachine = true) {
    this.isDirect = isDirectMachine;
  }

  encrypt(message, key) {
    return this._cipher(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this._cipher(message, key, 'decrypt');
  }

  _getAsciiCodeForEncrypt(letterCharCode, keyCharCode) {
    const lettersInAlphabetCount = 26;
    const asciiUpperCaseLettersOffset = 65;
    return (letterCharCode + keyCharCode - 2*asciiUpperCaseLettersOffset) % lettersInAlphabetCount + asciiUpperCaseLettersOffset;
  }

  _getAsciiCodeForDecrypt(letterCharCode, keyCharCode) {
    const lettersInAlphabetCount = 26;
    const asciiUpperCaseLettersOffset = 65;
    return (letterCharCode - keyCharCode + lettersInAlphabetCount) % lettersInAlphabetCount + asciiUpperCaseLettersOffset;
  }

  _cipher(message, key, encryptOrDecrypt) {
    if (typeof message == 'undefined' || typeof key == 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    const upperCaseKey = key.toUpperCase();
    let keyIndex = 0;
    const resultAsciiArray = []
    message.toUpperCase().split('').forEach(letter => {
      if (/[A-Z]/.test(letter)) {
        const currentKeyAsciiCode = upperCaseKey.charCodeAt(keyIndex % key.length);
        let letterAsciiCode;
        if (encryptOrDecrypt === 'encrypt') {
          letterAsciiCode = this._getAsciiCodeForEncrypt(letter.charCodeAt(0), currentKeyAsciiCode);
        } else if (encryptOrDecrypt === 'decrypt') {
          letterAsciiCode = this._getAsciiCodeForDecrypt(letter.charCodeAt(0), currentKeyAsciiCode);
        }
        resultAsciiArray.push(letterAsciiCode);
        keyIndex++;
      } else {
        resultAsciiArray.push(letter.charCodeAt(0));
      }
    });

    if (!this.isDirect) {
      resultAsciiArray.reverse()
    }
    return String.fromCharCode(...resultAsciiArray);
  }
}

module.exports = {
  VigenereCipheringMachine
};
