'use strict';

var parent = document.head || document.documentElement;

var stylesheet  = document.createElement('link');
stylesheet.rel  = 'stylesheet';
stylesheet.type = 'text/css';
stylesheet.href = chrome.extension.getURL('src/css/dark.css');
parent.appendChild(stylesheet);

var script = document.createElement('script');
script.src = chrome.extension.getURL('src/app.js');
parent.appendChild(script);
