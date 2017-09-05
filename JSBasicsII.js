function magic_multiply(x, y) {
    if (x === 0 && y === 0) {
        return "All inputs 0";
    } else if (x.constructor === Array) {
        for (var i = 0; i < x.length; i++) {
            x[i] *= y;
        } 
        return x;
    } else if (y.constructor === String) {
        return "Error: Cannot multiply by string";
    } else if (x.constructor === String) {
        var output = "";
        for (var i = 0; i < y; i++) {
            output += x;
        }
        return output;
    } else {
        return x*y;
    }
}

console.log(magic_multiply(5, 2));
console.log(magic_multiply(0, 0));
console.log(magic_multiply([1, 2, 3], 2));
console.log(magic_multiply(7, "three"));
console.log(magic_multiply("Brendo", 4));