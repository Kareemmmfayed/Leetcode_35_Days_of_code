/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    let argsArr = args;
    return argsArr.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */