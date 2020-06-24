let groupOutput = document.getElementById('group-output');
let player = document.getElementById('player');
let submit = document.getElementById('submit');

let score = 0;
// score = amount of submissions

// if greg, onclick = greg.html as a table
submit.addEventListener("click", function() {
    if (player.value === 'bryan') {
        console.log(player.value)
        submit = bryan.html
    } else if (name === 'david') {
        submit = david.html
    } else if (name === 'greg') {
        submit = greg.html
    } else if (name === 'steve') {
        submit = steve.html
    }
    groupOutput.innerText = score++;
})