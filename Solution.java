
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int ASCII_SMALL_CASE_Z = 122;
    private static final String[] LETTERS_IN_ROWS = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};

    public String[] findWords(String[] words) {
        int[] quickAccessLettersInRows = new int[ASCII_SMALL_CASE_Z + 1];
        for (int i = 0; i < LETTERS_IN_ROWS.length; ++i) {
            fillQuickAccessLettersInRows(i + 1, LETTERS_IN_ROWS[i], quickAccessLettersInRows);
        }

        List<String> result = new ArrayList<>();
        for (String word : words) {
            if (canBeWrittenWithKeysOnOneRow(word, quickAccessLettersInRows)) {
                result.add(word);
            }
        }
        return listToArray(result);
    }

    private void fillQuickAccessLettersInRows(int currentRow, String lettersInCurrentRow, int[] quickAccessLettersInRows) {
        for (int i = 0; i < lettersInCurrentRow.length(); ++i) {
            quickAccessLettersInRows[lettersInCurrentRow.charAt(i)] = currentRow;
            quickAccessLettersInRows[Character.toUpperCase(lettersInCurrentRow.charAt(i))] = currentRow;
        }
    }

    private boolean canBeWrittenWithKeysOnOneRow(String word, int[] quickAccessLettersInRows) {
        int row = quickAccessLettersInRows[Character.toLowerCase(word.charAt(0))];
        for (int i = 1; i < word.length(); ++i) {
            if (row != quickAccessLettersInRows[Character.toLowerCase(word.charAt(i))]) {
                return false;
            }
        }
        return true;
    }

    private String[] listToArray(List<String> list) {
        String[] array = new String[list.size()];
        for (int i = 0; i < list.size(); ++i) {
            array[i] = list.get(i);
        }
        return array;
    }
}
