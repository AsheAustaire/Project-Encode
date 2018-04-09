// (function() {

  const DOM = {
    encodingTypesChosen: document.body.querySelector('#pane__encoding-section_chosen'),
    encodingTypesAvailable: document.body.querySelector('#pane__encoding-section_available'),
    encodingTypesAvailableChildren: document.body.querySelector('#pane__encoding-section_available').children,
  }

  const ENCODINGTYPES = {
    utf8: {
      name: 'UTF-8'
    },
    utf16: {
      name: 'UTF-16'
    },
    utf32: {
      name: 'UTF-32'
    }
  }

  initializeEncodingTypesAvailable(ENCODINGTYPES)

  // Itterate over provided encoding types, and use the html_encodingTileAvailable to dynamically generate a tile and insert it into the innerHTML of the
  // encodingTypesAvailable wrapper
  function initializeEncodingTypesAvailable(encodingTypeObject) {
    for(let key in encodingTypeObject) {
      DOM.encodingTypesAvailable.innerHTML += html_encodingTileAvailable(ENCODINGTYPES[key].name, key)
    }
  }

  // Itterate through initialized encoding types and add on click.
  // On Click remove from encodingTypesAvailable and put into encodingTypesChosen
  for(let ele of DOM.encodingTypesAvailableChildren) {
      ele.addEventListener('click', _moveEncodingTypeFromAvailableToChosen)
  }

  function html_encodingTileAvailable(encodingTypeName, encodingTypeHandle) {
    return `
    <div id='${encodingTypeHandle}' class='pane_encoding-section__tile'>
      <h3 class='text__h3 pane_encoding-section__h3'>${encodingTypeName}</h3>
    </div>
    `
  }

  function html_encodingTileChosen(encodingTypeName, encodingTypeHandle) {
    return `
    <div id='${encodingTypeHandle}' class='pane_encoding-section__tile'>
      <img id='${encodingTypeHandle}__img_close' class='pane_encoding-section__img_x' src='./components/pane/pane_encoding-selection/cancel.svg' />
      <h3 class='text__h3 pane_encoding-section__h3'>${encodingTypeName}</h3>
    </div>
    `
  }

  function _moveEncodingTypeFromAvailableToChosen(ev) {
    let clickedEle = ev.target;
    let chosenEle = html_encodingTileChosen(ev.target.id, ev.target.id);
    DOM.encodingTypesChosen.innerHTML += chosenEle ;
    let chosenImgClose = document.querySelector(`#${ev.target.id}__img_close`); // TODO:
    clickedEle.remove();
    chosenImgClose.addEventListener('click', () => {
      console.log('Build Out Close Function'); // TODO:
    })
    // clickedEle.removeEventListener('click', _moveEncodingTypeFromAvailableToChosen);
  }

// }())



