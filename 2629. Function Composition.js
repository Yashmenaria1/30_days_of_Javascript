/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        return functions.reduceRight((acc, curr) => curr(acc), x)
    }
};
//Typescript
type F = (x: number) => number;

function compose(functions: F[]): F {
    
	return function(x) {
        return functions.reduceRight((acc, curr) => curr(acc), x)
    }
};
