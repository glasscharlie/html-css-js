function addName() {
var userName = prompt('What is your name?');
return ('<h3>' + 'Hello ' + userName + ', lets learn about alpacas!' + '</h3>');
}




// function askQuestion() {
//     var answer = prompt('Do you think alpacas are cute?')


//     var message;
//     if(answer=== 'yes') { message = 'Correct, alpacas are cute.' 
//     } else if (answer=== 'no') { message = 'Who do you think you are?'
//     }
//     else {message = 'Alpacas are very cute!'
//     }

// return ('<h3>' + message + '<h3>');

// }


function getTime() {
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Perfect evening for alpacas!';
} else if (hourNow > 12) {greeting = 'Perfect afternoon for alpacas'
} else if (hourNow > 0) {greeting = 'Perfect morning for alpacas'
}

return '<h3>' + greeting + '</h3>';

}













function numberAlpacas(){
    var count = prompt('How many do you own?');
    while(count === '' || isNaN(count)){
      count = prompt('Please enter a number, how many do you own?');
    }
    return Number(count);
  }
  
  function preference(){
    var order = '';
    var item;
  
    while(order === ''){
      order = prompt('Do you prefer alpacas or llamas?');
    }
    
    if (order === 'alpacas'){
        item = '<img src="images/alpaca1.jpg" style="width:30%" style="height:30%">';
      } else if (order === 'llamas'){
        item = '<img src="images/llama1.jpg" style="width:30%" style="height:30%">';
      } 
      else {
        item = '<strong>No animals owned</strong>';
      }
      return item;
   
  }

  
  function showAnimal(){
    var item = preference();
    var total = numberAlpacas();
    var result = '';
  
    for(var i = 0; i < total; i++){
      var realCount = i + 1;
      result = result + '<p> #' + realCount + ' ' + item + '</p>'
    }
    return result;
  }