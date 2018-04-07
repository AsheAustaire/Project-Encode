(function(){

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
      userInputPane.binaryText.innerHTML = 'none';
    } else {
      encodingInfo()
    }
  })

//Set encoding

  function encodingInfo() {
    let binaryText = userInputPane.input.value.charCodeAt().toString(2) // Convert user input into binary string
    if (binaryText === undefined) {
      userInputPane.binaryText.innerText =  'Invalid Character';
    } else {
      userInputPane.binaryText.innerText =  returnBinaryText(binaryText) ; // Modifies Unifished UTF-8 String
    }
  }

// Returns String For Binary Text

  function returnBinaryText(binaryText) {
    newBinaryText = binaryText
    if(newBinaryText.length < 8) {
      let missingZero = 8 - binaryText.length
      for(let i = 0; i < missingZero; i++)
      newBinaryText = '0' + newBinaryText
    }
    return newBinaryText
  }


}())
