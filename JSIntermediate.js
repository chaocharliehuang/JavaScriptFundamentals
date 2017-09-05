// Part I
function starString(n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output += '*';
    }
    return output;
}
console.log(starString(8));

// Part II
function draw_stars(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(starString(arr[i]));
    }
}
draw_stars([4,6,1,3,5,7,25]);

// Part III
function draw_stars(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].constructor === String) {
            let output = '';
            for (let j = 0; j < arr[i].length; j++) {
                output += arr[i][0].toLowerCase();
            }
            console.log(output);
        } else {
            console.log(starString(arr[i]));
        }
    }
}
draw_stars([4, 'Tom', 1, 'Michael', 5, 7, 'Jimmy Smith']);