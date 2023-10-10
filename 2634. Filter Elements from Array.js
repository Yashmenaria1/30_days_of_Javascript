/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
    var filtered_arr = [];
    for(var i = 0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filtered_arr.push(arr[i]);
        }
    }
    return filtered_arr;
};

//Typescript
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}
