var answer = prompt('Do you think alpacas are cute?');

var message;
if(answer=== 'yes') { message = 'Correct, alpacas are cute.' 
} else if (answer=== 'no') { message = 'Who do you think you are?'
}
else {message = 'Alpacas are very cute!'
}

document.write('<h3>' + message + '<h3>');