/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let result = []
    for(i=0; i<arr.length; i+=size) {
        result.push(arr.slice(i, i+size))
    }
    return result
};

//TypeScript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: any[], size: number): any[][] {
    const ans = [];

    while (arr.length > 0)
        ans.push(arr.splice(0, size));

    return ans;
}
