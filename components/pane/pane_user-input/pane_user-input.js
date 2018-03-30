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
      userInputPane.encodingText.innerText = 'none';
      userInputPane.binaryText.innerText = 'none';
    } else {
      displayEncoding()
    }
    console.log(ev);
  })

// Places Text Onto Screen

  function displayEncoding() {
    let encodingObj = getEncodingInfo(userInputPane.input.value.charCodeAt().toString(2));
    userInputPane.encodingText.innerText =  encodingObj.encodingText;
    userInputPane.binaryText.innerText =  encodingObj.binaryText;
  }

// Sets Encoding Obj w/ Appropriate Data

  function getEncodingInfo(binaryText) {
    let encodingObj = createEncodingObj();
    encodingObj.encodingText = returnEncodingText(binaryText)
    encodingObj.binaryText = returnBinaryText(binaryText)
    return encodingObj
  }

// Creates Empty Encoding Obj

  function createEncodingObj() {
    return {
      binaryText: '',
      encodingText: ''
    };
  }

// Returns String For Encoding Text

  function returnEncodingText(binaryText) {
    let encodedTextString = [];
    if(isUTF8(binaryText)) {
      encodedTextString.push('UTF-8')
    }
    if(isUTF16(binaryText)) {
      encodedTextString.push('UTF-16')
    }
    if(isUTF32(binaryText)) {
      encodedTextString.push('UTF-32')
    }
    if(isASCII(binaryText)) {
      encodedTextString.push('ASCII')
    }
    if(encodedTextString === '') {
      encodedTextString.push('Could Not Identify')
    }

    return encodedTextString.join(' or ');
  }

// Checks Binary Text Against Encoding Type Traits
    function isUTF8(binaryText) {
      if(binaryText.length < 8){
        return true
      }
      return true;
    }
// Checks Binary Text Against Encoding Type Traits
    function isUTF16(binaryText) {
      if(binaryText.length > 8 && binaryText <= 16){
        return true;
      }
    }
// Checks Binary Text Against Encoding Type Traits
    function isUTF32(binaryText) {
      if(binaryText.length > 16 && binaryText <= 32){
        return true;
      }
    }
// Checks Binary Text Against Encoding Type Traits
    function isASCII(binaryText) {
      if(binaryText.length < 8){
        return true;
      }
    }
// Checks Binary Text Against Encoding Type Traits
    function isBIG5(binaryText) {
      if(binaryText.length == 16){
        return true;
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
