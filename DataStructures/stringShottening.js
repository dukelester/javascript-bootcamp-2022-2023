// String Shortenning
const dictionary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
console.log(dictionary);

const reverseWord = (word) => {
  let reversed = '';
  for (let k = word.length - 1; k >= 0; k -= 1) {
    reversed += word.at(k);
  }
  return reversed;
};

const encodeID = (num) => {
  const base = dictionary.length;
  let encoded = '';
  if (num === 0) {
    return dictionary[0];
  }
  while (num > 0) {
    encoded += dictionary[num % base];
    num = Math.floor(num / base);
  }
  return reverseWord(encoded);
};

const decode = (id) => {
  const base = dictionary.length;
  let decoded = '';
  for (let index = 0; index < id.split('').length; index += 1) {
    decoded = decoded * base + dictionary.indexOf(id.at(index));
  }
  return decoded;
};

const stringToEncode = 'duke lester';
const encoded = encodeID(567890);
console.log(encoded);
const decoded = decode(stringToEncode);
console.log(decoded);
