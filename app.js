console.log("starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var command = argv._[0];

console.log("Command: ", command);
console.log("Yargs", argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("note created");
        console.log("---");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else {
        console.log("note taken");
    }
}
else if(command === 'read') {
    notes.getNote(argv.title);
}
else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was Removed" : "Note not found";
    console.log(message);
}
else if(command === 'list') {
    notes.getAll();
}
else {
    console.log("Command not recognized");
}