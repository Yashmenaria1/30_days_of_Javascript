/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};

//TypeScript
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const timeoutPromise = new Promise((_,reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
        })

        return Promise.race([fn(...args), timeoutPromise])
    }
};
