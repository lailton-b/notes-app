const chalk = require('chalk');
const { saveNotes, loadNotes, textSeparator } = require('./utils.js');

const addNote = (title, body) => {
  const notes = loadNotes();
  const isDuplicatedNote = notes.find((note) => note.title === title);

  if (isDuplicatedNote) {
    const message = `A note with the title "${title}" already exists!`;
    const separator = textSeparator(message.length);
    console.log(chalk.green.bold(separator));
    console.log(chalk.green.bold(message));
    console.log(chalk.green.bold(separator));
    return;
  }

  notes.push({
    title,
    body,
  });
  saveNotes(notes);

  const message = `New note added!`;
  const separator = textSeparator(message.length);
  console.log(chalk.green.bold(separator));
  console.log(chalk.green.bold(message));
  console.log(chalk.green.bold(separator));
  console.log(chalk.blue.bold('Title: '), chalk.white.bold(`${title}`));
  console.log(chalk.blue.bold('Body: '), chalk.white.bold(`${body}`));
  console.log(`\n`);
};

module.exports = {
  addNote,
};
