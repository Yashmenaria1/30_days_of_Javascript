/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let value = init;
    for(var x of nums){
        value = fn(value, x);
    }
    return value;
};

//Typescript
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let value:number = init;
    for(var x of nums){
        value = fn(value, x);
    }
    return value;
};
