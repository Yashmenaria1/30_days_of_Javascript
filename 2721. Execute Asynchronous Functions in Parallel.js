/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
     const promises = functions.map(fn => fn());
    return Promise.all(promises);
    
}
