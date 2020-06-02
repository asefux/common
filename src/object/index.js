const R = require('ramda');

const flattenObject = (obj) => {
  const toReturn = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof (obj[key]) === 'object' && obj[key] !== null) {
      const flatObject = flattenObject(obj[key]);
      const flatObjectKeys = Object.keys(flatObject);
      flatObjectKeys.forEach((flatObjectKey) => {
        toReturn[`${key}.${flatObjectKey}`] = flatObject[flatObjectKey];
      });
    } else {
      toReturn[key] = obj[key];
    }
  });
  return toReturn;
};


const unflatten = (flatObject) => {
  const keys = Object.keys(flatObject);
  return keys.reduce((result, key) => R.assocPath(key.split('.'), flatObject[key], result), {});
};

module.exports = {
  flatten: flattenObject,
  unflatten,
};
