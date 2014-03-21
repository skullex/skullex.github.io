// Web stuff is complicated. When I learned to program it was just logging numbers to the console, like this:

console.log([1, 1, 2, 3, 5, 8]);

// You all have to learn how HTML, CSS and JS work together, and that is tricky

// Zombies are more fun. Let's use jquery to find the  current color of the circle

var currentColor = $('.zombie').css('background-color');

// And let's print it out
console.log(currentColor);

// Let's make a function to change the zombie color by modifying the css of the zombie element

var changeColor = function(color) {
  $('.zombie').css('background-color', color);
}

// Let's try out the function

changeColor('rgb(255, 255, 0)');

var changeToRed = function(){
  changeColor('yellow');
}

var changeToGreen = function(){
  changeColor('blue');
}

var changeTwice = function(){
  changeToRed();
  window.setTimeout(changeToGreen, 1000);
}

window.setInterval(changeTwice, 2000);
