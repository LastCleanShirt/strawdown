#!/usr/bin/env node

// Importing some libraries

// Lexer
module.exports = class {
	constructor (datafile) {
		this.keywords = [
			"#1", "#2", "#3", "#4", "#10",
			"`"];
		this.datafile = datafile;
		this.data = this.datafile.split(/\r?\n/);
		this.lextree = [];
		this.tokens = [];
		
	}
	lexer () {
		/*
		for ( let keyword in this.keywords ) {
			for ( let data_ in keyword ) { 
				if ( data_ === keyword ) {
					console.log(data_);
					console.log(keyword);
				} else {
					this.tokens.push(data_);
				}
			}
		}
		*/
		for ( let dataraw in this.data ) {
			let data_ = this.data[dataraw];
			console.log(data_);
			let dataline_ = data_.split(" ");
			console.log(dataline_);
			// Detect first word
			if ( dataline_[0][0] === "#" ) {
				let dataheader_ = dataline_[0].substring(1, dataline_[0].length);
				for ( let headernumber_ = 0; headernumber_ < 3; headernumber_++) {
					if ( dataheader_ === this.keywords[headernumber_].substring(1, dataline_[0].length) ) {
						this.lextree.push({ id: "header", headersize: this.keywords[headernumber_][1], content: dataline_.slice(1, dataline_.length).join(" ") });
					} else {
						this.lextree.push({ id: "other", size: "", content: "" });
					}
				}
			} else {}
		}
	}
};
