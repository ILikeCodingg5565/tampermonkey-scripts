// ==UserScript==
// @name         My Extension Script
// @version      1.0
// @description  Script created from Chrome Extension
// @match        *://*/*
// @grant        none
// ==/UserScript==

document.cookie = "tampermonkeyScriptInstalled=true; path=/; max-age=" + 60 * 60 * 24 * 365; // cookie expires in 1 year
