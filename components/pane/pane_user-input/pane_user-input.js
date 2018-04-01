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
      encodingInfo()
    }
  })

//Set encoding

  function encodingInfo() {
    let binaryText = userInputPane.input.value.charCodeAt().toString(2)
    if(binaryText === undefined) {
      let encodingObj = createEncodingObj();
      encodingObj.encodingText = returnEncodingText(binaryText)
      encodingObj.binaryText = returnBinaryText(binaryText)
      return encodingObj
    } else {
      let encodingObj = createEncodingObj(binary);
      userInputPane.encodingText.innerText =  encodingObj.encodingText;
      userInputPane.binaryText.innerText =  encodingObj.binaryText;
    }
  }

// Creates Empty Encoding Obj

  function createEncodingObj() {
    return {
      binaryText: '',
      encodingText: ''
    };
  }

// Returns String For Encoding Text


    function resolveEncoding(binaryText) {
      var types = [];
      if(binaryText.length < 8){
        return true
        types.push('UTF-8')
      }
      if(binaryText.length > 8 && binaryText <= 16){
        types.push('UTF-16')
      }
      if(binaryText.length > 16 && binaryText <= 32){
        types.push('UTF-32')
      }
      if(binaryText.length < 8){
        types.push('ASCII')
      }
      return types.join(' or ');
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
