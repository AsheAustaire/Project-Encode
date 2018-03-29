
const form = {
  'selector': document.body.querySelector('#form'),
  'userInput': {
    'selector': document.body.querySelector('#form__input_user-string')
  },
  'binaryOutput': {
    'selector': document.body.querySelector('#form__output_bin-string')
  },
};

form.selector.addEventListener('submit', (ev) => {
  ev.preventDefault();
    form.binaryOutput.selector.value = '';
  let inputNode = form.userInput.selector;
  let userString = inputNode.value;
  let finalString = ''
  console.log(`The original string is : ${userString}`);
  for(char in userString){
    console.log(`Binary for Char ${char} is ${userString[char].charCodeAt(0).toString(2)}`);
    finalString += userString[char].charCodeAt(0).toString(2) + '-';
  };
  form.binaryOutput.selector.value += finalString.slice(0, form.binaryOutput.selector.value.length - 1)
})
