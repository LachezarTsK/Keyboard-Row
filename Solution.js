
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    this.ASCII_SMALL_CASE_Z = 122;
    this.ASCII_DIFFERENCE_IN_LETTER_CASE = 32;
    this.LETTERS_IN_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    const  quickAccessLettersInRows = new Array(this.ASCII_SMALL_CASE_Z + 1);
    for (let i = 0; i < this.LETTERS_IN_ROWS.length; ++i) {
        fillQuickAccessLettersInRows(i + 1, LETTERS_IN_ROWS[i], quickAccessLettersInRows);
    }

    const result = [];
    for (let word of words) {
        if (canBeWrittenWithKeysOnOneRow(word, quickAccessLettersInRows)) {
            result.push(word);
        }
    }
    return result;
};

/**
 * @param {number} currentRow
 * @param {string} lettersInCurrentRow
 * @param {number[]} quickAccessLettersInRows  
 * @return {void}
 */
function fillQuickAccessLettersInRows(currentRow, lettersInCurrentRow, quickAccessLettersInRows) {
    for (let i = 0; i < lettersInCurrentRow.length; ++i) {
        quickAccessLettersInRows[lettersInCurrentRow.codePointAt(i)] = currentRow;
        quickAccessLettersInRows[lettersInCurrentRow.codePointAt(i) - this.ASCII_DIFFERENCE_IN_LETTER_CASE] = currentRow;
    }
}

/**
 * @param {string} word
 * @param {number[]} quickAccessLettersInRows  
 * @return {boolean]}
 */
function canBeWrittenWithKeysOnOneRow(word, quickAccessLettersInRows) {
    const row = quickAccessLettersInRows[word.codePointAt(0)];
    for (let i = 1; i < word.length; ++i) {
        if (row !== quickAccessLettersInRows[word.codePointAt(i)]) {
            return false;
        }
    }
    return true;
}
