// Basic 1
let x = [];
console.log(x);
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();
console.log(x);

// Basic 2
const y = [];
console.log(y);
y.push(88);

// Basic 3
let z = [9, 10, 6, 5, -1, 20, 13, 2];
for (var i = 0; i < z.length; i++) {
    console.log(z[i]);
}
for (var i = 0; i < z.length-1; i++) {
    console.log(z[i]);
}

// Basic 4
let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i].length);
}
for (var i = 0; i < names.length; i++) {
    if (names[i].length === 5) {
        console.log(names[i]);
    }
}

// Basic 5
function yell(string) {
    return string.toUpperCase();
}
console.log(yell('hello'));