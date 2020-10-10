// Copyright (c) 2020 Simon Gustafsson (www.optisimon.com)

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({elementToRotate: 'html5-video-player'}, function() {
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.youtube.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.commands.onCommand.addListener(function(command) {
  chrome.storage.sync.get('elementToRotate', function(data) {
    let elementId = data.elementToRotate;
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
      let str = 'if (document.getElementsByClassName(\'' + elementId + '\')[0].style.transform == \'rotate(180deg)\') {' +
                '  document.getElementsByClassName(\'' + elementId + '\')[0].style.transform = \'rotate(0deg)\'' +
                '} else {' + 
                '  document.getElementsByClassName(\'' + elementId + '\')[0].style.transform = \'rotate(180deg)\'}';
      chrome.tabs.executeScript(
          tab.id,
          {code: str});
    });
  }); 
});
