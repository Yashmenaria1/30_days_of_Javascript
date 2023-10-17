/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t){  
    fn(...args)  
    const interval= setInterval(()=> fn(...args),t)
    return () => clearInterval(interval)
};

//TypeScript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Function, args: any[], t: number): Function {
    fn( ...args );
    const ref = setInterval(() => {
        fn(...args);
        }, t);
    return (cancelT: number) => setTimeout(()=>{
        clearInterval(ref);
    }, cancelT)
};
