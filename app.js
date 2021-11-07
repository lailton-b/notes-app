const chalk = require('chalk');
const yargs = require('yargs');

function messageHandler(message, color) {
  console.log(chalk[color].bold(message));
}

const commands = [
  {
    command: 'add',
    describe: 'Add a new note',
    handler: () => messageHandler('Adding a new note!', 'green'),
  },
  {
    command: 'remove',
    describe: 'Remove a note',
    handler: () => messageHandler('Removing the note!', 'red'),
  },
  {
    command: 'list',
    describe: 'List your notes',
    handler: () => messageHandler('Listing out all notes!', 'white'),
  },
  {
    command: 'read',
    describe: 'Read a notes',
    handler: () => messageHandler('Reading a note!', 'white'),
  },
];

commands.forEach((command) => {
  yargs.command(command);
});

console.log(yargs.argv);
