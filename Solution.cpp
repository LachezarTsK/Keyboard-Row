
#include <array>
#include <vector>
#include <string>
using namespace std;

class Solution {
    
    static const int ASCII_SMALL_CASE_Z = 122;
    inline static const array<string, 3> LETTERS_IN_ROWS{"qwertyuiop", "asdfghjkl", "zxcvbnm"};
    using ArrayQuickAccess = array<int, ASCII_SMALL_CASE_Z + 1 >;

public:
    vector<string> findWords(const vector<string>& words) const {
        ArrayQuickAccess quickAccessLettersInRows{};
        for (int i = 0; i < LETTERS_IN_ROWS.size(); ++i) {
            fillQuickAccessLettersInRows(i + 1, LETTERS_IN_ROWS[i], quickAccessLettersInRows);
        }

        vector<string> result;
        for (const auto& word : words) {
            if (canBeWrittenWithKeysOnOneRow(word, quickAccessLettersInRows)) {
                result.push_back(word);
            }
        }
        return result;
    }

private:
    void fillQuickAccessLettersInRows(int currentRow, const string& lettersInCurrentRow, ArrayQuickAccess& quickAccessLettersInRows) const {
        for (int i = 0; i < lettersInCurrentRow.length(); ++i) {
            quickAccessLettersInRows[lettersInCurrentRow[i]] = currentRow;
        }
    }

    bool canBeWrittenWithKeysOnOneRow(const string& word, const ArrayQuickAccess& quickAccessLettersInRows) const {
        int row = quickAccessLettersInRows[tolower(word[0])];
        for (int i = 1; i < word.length(); ++i) {
            if (row != quickAccessLettersInRows[tolower(word[i])]) {
                return false;
            }
        }
        return true;
    }
};
