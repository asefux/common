const uuid = require('uuid');
const uuidValidation = require('uuid-validate');
const BN = require('bignumber.js');
const R = require('ramda');

const object = require('./src/object');
const string = require('./src/string');

const bn = (x) => new BN(x);

const getTimeFromTimeuuid = (uuid_str) => {
  const uuid_arr = uuid_str.split('-');
  const time_str = [
    uuid_arr[2].substring(1),
    uuid_arr[1],
    uuid_arr[0],
  ].join('');

  return Math.floor(parseInt(time_str, 16) / 100000);
};

const isUuid = (s, version = 4) => uuidValidation(s, version);


module.exports = {
  uuid,
  BN,
  bn,
  getTimeFromTimeuuid,
  isUuid,
  R,
  object,
  string,
};
