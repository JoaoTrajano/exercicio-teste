function updateData<T>(currentObject: any, newDataObject: any): T {
  const keysCurrentObject = Object.keys(currentObject);
  const keysNewDataObject = Object.keys(newDataObject);

  const keysNewDataObjectLength = keysNewDataObject.length;

  let index = 0;
  while (index < keysNewDataObjectLength) {
    const fieldObjectSearch = keysNewDataObject[index];
    const itFoundField = keysCurrentObject.includes(fieldObjectSearch);

    if (itFoundField) {
      if (currentObject[fieldObjectSearch] === newDataObject[fieldObjectSearch]) {
        currentObject[fieldObjectSearch] = newDataObject[fieldObjectSearch] as T[keyof T];
      }
    }

    index++;
  }

  return currentObject;
}

export default updateData;
