// Math 1
function zero_negativity(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}
console.log(zero_negativity([1,2,3,4]));
console.log(zero_negativity([1,-2,3,4]));

// Math 2
function is_even(num) {
    return num % 2 === 0;
}

// Math 3
function how_many_even(arr) {
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (is_even(arr[i])) {
            evenCount++;
        }
    }
    return evenCount;
}
console.log(how_many_even([2,3,4,5,6]));

// Math 4
function create_dummy_array(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.random()*9);
    }
    return arr;
}
console.log(create_dummy_array(10));

// Math 5
function random_choice(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
console.log(random_choice([1,2,3,4,5]));