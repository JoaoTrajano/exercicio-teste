function checkIfTheFirstLetterIsUppercase(word: string): boolean {
  const firstLetter = word[0].toLowerCase();
  if (firstLetter !== word[0]) {
    return true;
  }
  return false;
}

export default checkIfTheFirstLetterIsUppercase;
