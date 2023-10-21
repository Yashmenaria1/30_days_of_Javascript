/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this[this.length - 1] ?? -1;
};

//TypeScript
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    return this[this.length - 1] ?? -1;
};
