
function repeatedWords(paragraph) {
    const word = paragraph.split(/[\s,]+/);//split the paragraph by replace the space with ',' 
    const array = [];

    for (let i = 0; i < word.length; i++) {
        let convertWord = word[i].toLowerCase();
        let check = array.includes(convertWord);

        if (check) {
            return convertWord;
        }
        array.push(convertWord);
        console.log(array);
    }
    return "there no duplicate";
}
module.exports = repeatedWords;