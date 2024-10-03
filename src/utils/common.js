export function areObjectsEqual(obj1, obj2) {
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is different
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Create a set of all keys in both objects
  const allKeys = new Set([...keys1, ...keys2]);
  allKeys.delete('links')

  // Check if all keys and values are the same
  for (let key of allKeys) {
    if (obj1[key] !== obj2[key]) {
      console.log('Onjects aint d same')
      return false;
    }
  }

  return true;
}

