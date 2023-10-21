/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
      let arr=this;
      if(arr.length==0)
      {
         return -1;
      }
      return arr[arr.length-1];
};


//TypeScript
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
      let arr=this;
      if(arr.length==0)
      {
         return -1;
      }
      return arr[arr.length-1];
};


export {};
