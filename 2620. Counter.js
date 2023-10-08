var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

// typescript
function createCounter(n: number): () => number {
    
    return function() {
		return n++
    }
}
