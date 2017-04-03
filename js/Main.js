// Main JavaScript Document
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