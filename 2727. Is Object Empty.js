/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Object.keys(obj).length===0){
        return true;
    }
    else return false;
};

//TypeScript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Record<string, any> | any[]): boolean {
  for (let value in obj) {
    return false;
  }

  return true;
};
