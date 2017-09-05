// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (let i = 0; i < students.length; i++) {
    console.log('Name: ' + students[i].name + ", Cohort: " + students[i].cohort);
}

// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
for (let key in users) {
    console.log(key.toUpperCase());
    for (let i = 0; i < users[key].length; i++) {
        let last_name = users[key][i].last_name.toUpperCase();
        let first_name = users[key][i].first_name.toUpperCase();
        console.log((i+1) + " - " + last_name + ", " + first_name + " - " + (last_name + first_name).length);
    }
}