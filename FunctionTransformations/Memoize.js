/**
 * @param {Function} fn
 */

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    }
}

/** 
  * let callCount = 0;
  * const memoizedFn = memoize(function (a, b) {
  *	 callCount += 1;
  *   return a + b;
  * })
  * memoizedFn(2, 3) // 5
  * memoizedFn(2, 3) // 5
  * console.log(callCount) // 1 
  */


// BING explanation 

// function memoize(fn) {
//     // This is the cache object that will store the results of fn
//     const cache = {};
//     // This is the new function that will be returned by memoize
//     return function(...args) {
//       // This is the key that will be used to store or retrieve the result of fn
//       // It is created by converting the arguments array into a JSON string
//         const key = JSON.stringify(args);
//       // This is the conditional statement that checks if the key exists in the cache
//         if (key in cache) {
//         // If yes, then return the cached result without calling fn
//         return cache[key];
//         }
//       // If no, then call fn with the given arguments and store the result in a variable
//         const result = fn.apply(this, args);
//       // Then assign the result to the cache object with the key
//         cache[key] = result;
//       // And finally return the result
//         return result;
//     }
// }