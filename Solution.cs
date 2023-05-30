
using System;
using System.Collections.Generic;

public class Solution
{
    static readonly int ASCII_SMALL_CASE_Z = 122;
    static readonly string[] LETTERS_IN_ROWS = { "qwertyuiop", "asdfghjkl", "zxcvbnm" };
    public string[] FindWords(string[] words)
    {
        int[] quickAccessLettersInRows = new int[ASCII_SMALL_CASE_Z + 1];
        for (int i = 0; i < LETTERS_IN_ROWS.Length; ++i)
        {
            fillQuickAccessLettersInRows(i + 1, LETTERS_IN_ROWS[i], quickAccessLettersInRows);
        }

        List<String> result = new List<String>();
        foreach (var word in words)
        {
            if (canBeWrittenWithKeysOnOneRow(word, quickAccessLettersInRows))
            {
                result.Add(word);
            }
        }
        return result.ToArray();
    }

    private void fillQuickAccessLettersInRows(int currentRow, String lettersInCurrentRow, int[] quickAccessLettersInRows)
    {
        for (int i = 0; i < lettersInCurrentRow.Length; ++i)
        {
            quickAccessLettersInRows[lettersInCurrentRow[i]] = currentRow;
            quickAccessLettersInRows[Char.ToUpper(lettersInCurrentRow[i])] = currentRow;
        }
    }

    private bool canBeWrittenWithKeysOnOneRow(String word, int[] quickAccessLettersInRows)
    {
        int row = quickAccessLettersInRows[word[0]];
        for (int i = 1; i < word.Length; ++i)
        {
            if (row != quickAccessLettersInRows[word[i]])
            {
                return false;
            }
        }
        return true;
    }
}
