(function() {
    'use strict';

    if (!window.hasOwnProperty('isError')) window.isError = isError;
    if (!window.hasOwnProperty('isNotError')) window.isNotError = isNotError;

    function isError(object) {
        return toString.call(object) === '[object Error]';
    }

    function isNotError(object) {
        return !isError(object);
    }
})();
