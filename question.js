function addName() {
var userName = prompt('What is your name?');
return ('<h3>' + 'Hello ' + userName + ', lets learn about alpacas!' + '<h3>');
}




function askQuestion() {
    var answer = prompt('Do you think alpacas are cute?');

    var message;
    if(answer=== 'yes') { message = 'Correct, alpacas are cute.' 
    } else if (answer=== 'no') { message = 'Who do you think you are?'
    }
    else {message = 'Alpacas are very cute!'
    }

return ('<h3>' + message + '<h3>');

}


function getTime() {
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Perfect evening for alpacas!';
} else if (hourNow > 12) {greeting = 'Perfect afternoon for alpacas'
} else if (hourNow > 0) {greeting = 'Perfect morning for alpacas'
}

document.write('<h3>' + greeting + '</h3>');

}