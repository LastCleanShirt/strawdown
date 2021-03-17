#!/usr/bin/env node

// Importing some libraries

// Parser
module.exports = class {
	constructor (lextree) {
		this.lextree = lextree;
		this.parsetree = [];
	}
	parse () {
		this.parsetree = [];
		let lextree = this.lextree;
		/*
		lextree.forEach(function (arrayItem) {
			// Detect Header/header
			if ( arrayItem.id === "header" ) {
				this.parsetree.push({ tokenid: "header", size: arrayItem.headersize.parseInt() });
			} else {
				this.parsetree.push({ tokenid: "other", size: "" });
			}
		});*/
		for ( let arrayItemNumber = 0; arrayItemNumber < lextree.length; arrayItemNumber++ ) {
			if ( lextree[arrayItemNumber].id === "header" ) {
				this.parsetree.push({ tokenid: "header", size: lextree[arrayItemNumber].headersize });
			} else {
				this.parsetree.push({ tokenid: "other", size: "" });
			}
		}
	}
};
