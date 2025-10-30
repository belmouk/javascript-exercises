const palindromes = function (sentence) {
    const punctuation = { " ": null, ",": null, "." : null, ":" : null, "!" : null, ";" : null, "?" : null};

    const words = sentence.split("").filter(word => !(word in punctuation)).map(word => word.toLowerCase());
    const wordsReversed = words.toReversed();
    
    for (let i =0; i < words.length; i++) {
        if (words[i] !== wordsReversed[i]) {
            return false;   
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
