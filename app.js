const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, removeNote } = require('./notes.js');

function messageHandler(message, color) {
  console.log(chalk[color].bold(message));
}

const commands = [
  {
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      addNote(argv.title, argv.body);
    },
  },
  {
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      removeNote(argv.title);
    },
  },
  {
    command: 'list',
    describe: 'List your notes',
    handler() {
      messageHandler('Listing out all notes!', 'white');
    },
  },
  {
    command: 'read',
    describe: 'Read a notes',
    handler() {
      messageHandler('Reading a note!', 'white');
    },
  },
];

commands.forEach((command) => {
  yargs.command(command);
});
yargs.parse();
