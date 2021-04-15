const _ = require('lodash');
const {isBN} = require('web3-utils');

const bigNumberToString = (bigNumber) => isBN(bigNumber) ? bigNumber.toString() : bigNumber;
const removeBigNumbers = (object) => _.mapValues(object, bigNumberToString);
const pickProperties = (pickedObject, referenceObject) => _.pick(pickedObject, _.keys(referenceObject));

module.exports = {
    removeBigNumbers,
    pickProperties,
}
