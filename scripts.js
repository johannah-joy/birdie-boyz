let form = document.getElementsByTagName('form');
let groupOutput = document.getElementById('groupOutput');
let player = document.getElementById('player');
let submit = document.getElementById('submit');
let bryanData = document.getElementById('bryanData');
let davidData = document.getElementById('davidData');
let gregData = document.getElementById('gregData');
let steveData = document.getElementById('steveData');

let score = 0;
// score = amount of submissions

// if greg, onclick = greg.html as a table
submit.addEventListener("click", function() {
    console.log(player.value)
    console.log('hi')
    groupOutput.innerText = score++;
    if (player.value === 'bryan') {
        
        form.action = bryan.html;
        form.method = 'GET';
        // submit = bryan.html;
        // bryanData.innerText;
    } 
    // else if (name === 'david') {
    //     submit = david.html
    // } else if (name === 'greg') {
    //     submit = greg.html
    // } else if (name === 'steve') {
    //     submit = steve.html
    // }
})