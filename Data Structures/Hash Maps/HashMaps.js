function hashFunc(str, length = 100) {
  let total = 0;
  const primeFactor = 3;

  for (let i = 0; i < Math.min(100, str.length); i++) {
    let char = str[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * primeFactor + value) % length;
  }

  return total;
}

class HashMap {
  constructor() {
    this.values = [];
  }

  values;

  set(key, val) {
    const hash = hashFunc(key);
    const currValue = this.values[hash];

    if (currValue) {
      this.values[hash] = this.values[hash].filter((item) => item[0] !== key);
      this.values[hash].push([key, val]);
    } else {
      this.values[hash] = [[key, val]];
    }

    return this;
  }

  get(key) {
    const hash = hashFunc(key);

    const val = this.values[hash];
    if (!val) return null;

    if (val) {
      return val.find((item) => item[0] === key)[1];
    }
  }

  getValues() {
    const allValues = [];
    this.values.forEach((item) =>
      item.forEach((subItem) => allValues.push(subItem[1]))
    );

    return allValues;
  }

  getKeys() {
    const allKeys = [];
    this.values.forEach((item) =>
      item.forEach((subItem) => allKeys.push(subItem[0]))
    );

    return allKeys;
  }
}

const hashMap = new HashMap();
