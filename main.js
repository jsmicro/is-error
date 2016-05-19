'use strict';

if (!global.hasOwnProperty('isError')) global.isError = isError;
if (!global.hasOwnProperty('isNotError')) global.isNotError = isNotError;

/**
 * Check does the given javascript object is a Error.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isError(object) {
    return toString.call(object) === '[object Error]';
}

/**
 * Check does the given javascript object is not a Error.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotError(object) {
    return !isError(object);
}

module.exports = {isError, isNotError};
