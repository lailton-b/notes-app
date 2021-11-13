const chalk = require('chalk');
const yargs = require('yargs');

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
        type: 'string ',
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      console.log(chalk.green.bold(`\n---------------\n`));
      console.log(chalk.green.bold(`New note added!`));
      console.log(chalk.green.bold(`\n---------------\n`));
      console.log(
        chalk.blue.bold('Title: '),
        chalk.white.bold(`${argv.title}`),
      );
      console.log(chalk.blue.bold('Body: '), chalk.white.bold(`${argv.body}`));
      console.log(`\n`);
    },
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
yargs.parse();
