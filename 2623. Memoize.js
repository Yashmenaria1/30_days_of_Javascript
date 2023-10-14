/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const mem={};
    return function(...args) {
        if (mem[args]!==undefined) return mem[args];
        mem[args]=fn(...args);
        return mem[args];
    }
}
//Typescript
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map()

    return function(...args) {
        const key = [...args].toString() 
        if(!cache.has(key)) {
            cache.set(key, fn(...args)) 
        }
        return cache.get(key) 
    }
}
