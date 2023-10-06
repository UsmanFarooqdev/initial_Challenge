const findLongestWordWithMostVowels = (sentence) => {
    const wordsList = sentence.split(/\s+/).map(word => word.replace(/[^a-zA-Z]/g, ''));
    if (wordsList.length === 0) {
      return null;
    }
    let longestWordInString = '';
    let maxVowelCount = 0;
    for (const eachWord of wordsList) {
      const vowelCount = (eachWord.match(/[aeiouAEIOU]/g) || []).length;
      if (eachWord.length > longestWordInString.length || (eachWord.length === longestWordInString.length && vowelCount > maxVowelCount)) {
        longestWordInString = eachWord;
        maxVowelCount = vowelCount;
      }
    }
    return longestWordInString;
  }
  const inputSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
  const longestWord = findLongestWordWithMostVowels(inputSentence);
  console.log(longestWord);