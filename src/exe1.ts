function maskify(string: string): string {
  if (string.length === 0) {
    return "";
  }

  const limitString: number = string.length - 4;
  let newString: string = string;

  for (let index = 0; index < limitString; index++) {
    newString = newString.substring(0, index) + "#" + newString.substring(index + 1);
  }

  return newString;
}

export default maskify;
