function getLargestWord(sentence) {
    const words = sentence.split(' ');
    let largestWord = '';
    let maxLength = 0;
    for (let i in words) {
        let word = words[i];
        if (word.length > maxLength) {
            largestWord = word; // largest word update
            maxLength = word.length; 
        }
    }

    return largestWord;
}
const sentence = "this is a javascript string demo";
console.log(getLargestWord(sentence));

