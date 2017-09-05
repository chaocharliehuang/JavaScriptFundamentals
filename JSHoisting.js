// 1: post-hoising
var hello;
console.log(hello);
hello = 'world';
// OUTPUT: undefined

// 2: post-hoising
var needle;
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
// OUTPUT: 'magnet'

// 3: post-hoising
var brendan;
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// OUTPUT: 'super cool'

// 4: post-hoising
var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// OUTPUT: 'chicken', 'half-chicken'

// 5: post-hoising
var mean;
mean();
// ...
// OUTPUT: error (mean is undefined function)

// 6: post-hoising
var genre;
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);
genre = 'disco';
rewind();
console.log(genre);
// OUTPUT: undefined, 'rock', 'r&b', 'disco'

// 7: post-hoising
var dojo;
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
dojo = 'san jose';
console.log(dojo);
learn();
console.log(dojo);
// OUTPUT: 'san jose', 'seattle', 'burbank', 'san jose'