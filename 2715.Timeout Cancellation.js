/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  var timeoutId = setTimeout(function() {
    fn.apply(null, args);
  }, t);

  var cancelFn = function() {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};
//TypeScript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

const cancellable = (fn: Function, args: any[], t: number): Function => {
    let willFnCall = true;
    setTimeout(() => willFnCall && fn(...args), t);
    return () => willFnCall = false;
};
