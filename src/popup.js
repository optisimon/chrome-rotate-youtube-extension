// Copyright (c) 2020 Simon Gustafsson (www.optisimon.com)

'use strict';

let changeRotation = document.getElementById('changeRotation');

chrome.storage.sync.get('elementToRotate', function(data) {
  changeRotation.setAttribute('value', data.elementToRotate);
  restoreRotation.setAttribute('value', data.elementToRotate);
});

// div with class video-stream is modified every time there is a commercial playing
// div with class html5-video-player

changeRotation.style.transform = 'rotate(180deg)';
changeRotation.onclick = function(element) {
  let elementId = element.target.value;
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let str = 'document.getElementsByClassName(\'' + elementId + '\')[0].style.transform = \'rotate(180deg)\'';

    chrome.tabs.executeScript(
        tabs[0].id,
        {code: str});
  });
};

let restoreRotation = document.getElementById('restoreRotation');
restoreRotation.onclick = function(element) {
  let elementId = element.target.value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let str = 'document.getElementsByClassName(\'' + elementId + '\')[0].style.transform = \'rotate(0deg)\'';
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: str});
  });
};
