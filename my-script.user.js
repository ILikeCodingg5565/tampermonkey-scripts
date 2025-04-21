// ==UserScript==
// @name         My Extension Script
// @version      1.0
// @description  Script created from Chrome Extension
// @match        *://*/*
// @grant        none
// ==/UserScript==

window.postMessage({ source: "tampermonkey", status: "installed" }, "*");
