const userInputPane = {
  pane: document.body.querySelector('#pane_user-input'),
  nextPane: document.body.querySelector('#pane_encoding-selection'),
  form: document.body.querySelector('#usr-input-form'),
  input: document.body.querySelector('#usr-input-input'),
  encodingText: document.body.querySelector('#usr-input-encoding-text'),
  binaryText : document.body.querySelector('#usr-input-binary-text')
}

userInputPane.form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  userInputPane.pane.classList.add("fadeOut");
  userInputPane.nextPane.classList.add("visible");
  userInputPane.nextPane.classList.add("fadeIn");
});

userInputPane.input.addEventListener('input', (ev) => {
  if(userInputPane.input.value === '' || userInputPane.input.value === null) {
    userInputPane.encodingText.innerText = 'none';
    userInputPane.binaryText.innerText = 'none';
  } else {
    userInputPane.encodingText.innerText = returnEncodingTypes(userInputPane.input.value.charCodeAt().toString(2))
    userInputPane.binaryText.innerText = userInputPane.input.value.charCodeAt().toString(2);
  }
  console.log(ev);
})

function returnEncodingTypes(binary) {
  return checkEncdoingType(binary)
}

function checkEncdoingType(binary) {
  if(binary.length === 7) {
    return 'UTF-8 or ASCII'
  } else {
    return 'Unknown Encoding'
  }
}
