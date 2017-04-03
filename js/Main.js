// Main JavaScript Document
//This javascript file uses a few libraries 
//The file uses the app.js file to create a 
//an app UI library to peform like a native app.
//The main.js uses zingtouch.js library for touch gestures and events.
var cards = [];
var mainContent = document.getElementId('main-content');
var mainContentRegion = new ZingTouch.Region(mainContent);

//Create the card object template
function contentCard(title, img, desc, link) {
	"use strict";
	this.title = title;
	this.img   = img;
	this.desc  = desc;
	this.link  = link;
}

var cardPicker = (function() {
	"use strict"; 
	var cards = [];
	var index = 0;
	
	function next() {
		index = index++ < cards.length ? index : 0;
		return cards(index);
	}
	
	function current() {
		return cards(index);
	}
	
	return {
		next: next,
		current: current
	};
	
	
})();