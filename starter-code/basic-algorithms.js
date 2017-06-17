// Names and Input

var hacker1 = "Dani";

console.log("the driver's name is " + hacker1);

var hacker2 = prompt("¿What is your name?");

console.log("the navigator's name is " + hacker2);

//Conditionals

if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

else if (hacker1.length < hacker2.length) {
  console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

else {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}

var array =[];
for (i = 0; i < hacker1.length; i++) {
   array.push(hacker1[i].toUpperCase());
   array.push(" ");
}

console.log(array.join(''));


console.log(hacker2.split('').reverse().join(''));

var compareResult = hacker1.localeCompare(hacker2);
console.log(compareResult);

 switch (compareResult) {
    case -1:
      console.log("The driver's name goes first");
      break;
    case 1:
      console.log("Yo, the navigator goes first definitely");
      break;
    case 0:
      console.log("what?! You both got the same name");
      break;
  }

//palindrome

 var palindrome = prompt("Write your palindrome here");

function checkPalindrom(palindrome) {
  return palindrome == palindrome.split('').reverse().join('');
}

if (checkPalindrom(palindrome) === true) {

console.log(palindrome + " It is a palindrome");
} else {
  console.log(palindrome + " It is not a palindrome");
}

// Lorem ipsum generator

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices leo in vehicula hendrerit. Curabitur nec risus sit amet felis sollicitudin placerat eget id nulla. In hac habitasse platea dictumst. Proin vehicula, elit ut fermentum viverra, massa mauris suscipit velit, rutrum condimentum eros diam eget sapien. Pellentesque lacinia nulla orci, id ultrices sapien rutrum a. Cras sodales tincidunt dui eu dapibus. Duis et porta tortor. Vivamus ut nulla magna. Duis feugiat sem non tellus interdum ornare. Suspendisse sollicitudin sagittis risus, quis rutrum dui fermentum quis. Vivamus efficitur, augue nec dictum lobortis, dui odio sagittis nunc, ac mattis ex diam a lectus. Quisque aliquam quam a eros tincidunt, eu luctus risus aliquet. Integer quis dui placerat, hendrerit tortor eu, aliquet massa. Nullam luctus efficitur risus vel hendrerit. Etiam sit amet sem et nunc mattis lobortis. Nunc pretium condimentum dolor, at ultrices tortor scelerisque vitae. Etiam aliquam risus sit amet velit imperdiet, vel ullamcorper sem sodales. Quisque et velit turpis. Donec vestibulum ullamcorper tellus non vestibulum. Nulla condimentum vestibulum metus ut commodo. Nulla viverra condimentum pellentesque. Nullam ultricies aliquet nisl, id convallis lorem. Ut volutpat leo non ligula vehicula, sed rutrum metus finibus. Duis eget pharetra felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna nulla. Vivamus vestibulum neque est, ac sodales mi viverra id. Nam vitae luctus turpis, eget efficitur nulla. Maecenas vitae neque a dolor fermentum commodo in tincidunt felis. In tempus tellus in dapibus faucibus. Sed sagittis non neque in ornare. Fusce a justo eu ligula feugiat bibendum id ac magna. Etiam in nisi ut arcu aliquam consequat."

console.log(text.split(' ').length + " words");

var count = 0;
var textArray = text.split(' ');

for (var i=0; i < textArray.length; i++) {
  if (textArray[i] === "Duis" ) {
    count += 1;
  }
}

console.log(count);
