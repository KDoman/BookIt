export const firstLettersUppercase = (string: string): string => {
  const stringArray = string.split(" ");
  let newSentence = "";
  stringArray.forEach((word) => {
    let newWord = "";
    const lowerCase = word.toLowerCase();
    const firstLetter = lowerCase[0].toUpperCase();
    const restOfWord = lowerCase.slice(1);
    newWord = firstLetter + restOfWord;
    newSentence += newWord + " ";
  });
  return newSentence.trim();
};
