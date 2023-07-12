
function firstChar(text) {
  // your code here
	if (!text || text.trim() === '') {
    return '';
  } else {
    return text.trim()[0];
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
