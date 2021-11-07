const chalk = require('chalk');
const command = process.argv[2];
const output = {
  add: {
    text: 'Adding note...',
    color: 'green',
  },
  remove: {
    text: 'Removing note...',
    color: 'red',
  },
};

if (command) {
  const response = output[command];
  const message = response
    ? chalk[response.color].bold(response.text)
    : chalk.red(`Command not found: ${chalk.bold(command)}`);

  console.log(message);
}
