/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let call = false;
	return function(...args){
    if(!call){
			call = true;
			return fn(...args);
    }
	}
};

//Typescript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
  let call=false;
	return function (...args) {
		if(!call){
			call = true;
			return fn(...args);
		}
	};
}
