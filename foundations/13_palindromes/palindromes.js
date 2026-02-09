const palindromes = function (word) {
    const lowerCaseWord = word.toLowerCase();
    const cleanStr = lowerCaseWord.replace(/[^a-z0-9]/g,'');

    const reversedStr = cleanStr
                    .split('')
                    .reverse()
                    .join('');

    return cleanStr === reversedStr;

};

// Do not edit below this line
module.exports = palindromes;
