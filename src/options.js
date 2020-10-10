// Copyright (c) 2020 Simon Gustafsson (www.optisimon.com)

'use strict';

let page = document.getElementById('elementIdDiv');
const kButtonElementId = ['html5-video-player', 'video-stream'];

function constructOptions(kButtonElementId, currentElementId) {
  for (let item of kButtonElementId) {
    let button = document.createElement('button');
    if (item == currentElementId) {
      button.style.fontWeight = 'bold'
    } else {
      button.style.fontWeight = 'normal'
    }
    button.addEventListener('click', function() {
      chrome.storage.sync.set({elementToRotate: item}, function() {
        console.log('elementToRotate is ' + item);
        //chrome.extension.getBackgroundPage().window.location.reload();
        location.reload();
      })
    });
    button.innerHTML = item;
    page.appendChild(button);
  }
}

chrome.storage.sync.get('elementToRotate', function(data) {
  constructOptions(kButtonElementId, data.elementToRotate);
});
