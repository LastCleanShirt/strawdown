#!/usr/bin/env node

// Importing some libraries
const { Command } = require("commander");
const program = new Command();
const lexer = require("./compiler/lexer.js");
const parser = require("./compiler/parser.js");
const strawdown = require("./compiler/strawdown.js");
const fs = require("fs");

// Extra Variables
const version = "1.0.0";

// Compile Options
program
	// Compile Options
	.command("compile <*.sdc files> <*.md output files>")
	.alias("c")
	.description("Compile *.sdc files")
	.action((sdcfile, outputfile) => {
		fs.readFile(sdcfile, "utf8", function (err, filedata) {
			console.log(filedata);
			const lex = new lexer(filedata);
			lex.lexer();
			console.log(lex.lextree);
			const parse = new parser(lex.lextree);
			parse.parse();
			console.log(parse.parsetree);
			/*
			const strawrun = new strawdown(parse.parsetree);
			strawrun.writeOutput(outputfile); */
		});
	});

// Parse Program
program.parse(process.argv);
