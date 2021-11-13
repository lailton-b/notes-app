const chalk = require('chalk');
const { saveNotes, loadNotes, textSeparator } = require('./utils.js');

const addNote = (title, body) => {
  const notes = loadNotes();
  const isDuplicatedNote = notes.find((note) => note.title === title);

  if (isDuplicatedNote) {
    const message = `Note already exists: ${chalk.white(`"${title}"`)}`;
    const separator = textSeparator(message.length - 10);
    console.log(chalk.red.bold(separator));
    console.log(chalk.red.bold(message));
    console.log(chalk.red.bold(separator));
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

const removeNote = (title) => {
  const notes = loadNotes();
  const noteIndex = notes.findIndex((note) => note.title === title);
  const noteExists = noteIndex > -1;
  if (!noteExists) {
    const message = `Note not found: ${chalk.white(`"${title}"`)}`;
    const separator = textSeparator(message.length - 10);
    console.log(chalk.red.bold(separator));
    console.log(chalk.red.bold(message));
    console.log(chalk.red.bold(separator));
    console.log(chalk.blue.bold('Title: '), chalk.white.bold(`${title}`));

    return;
  }

  const noteBody = notes[noteIndex].body;
  notes.splice(noteIndex, 1);
  saveNotes(notes);

  const message = `Note removed!`;
  const separator = textSeparator(message.length);
  console.log(chalk.green.bold(separator));
  console.log(chalk.green.bold(message));
  console.log(chalk.green.bold(separator));
  console.log(chalk.blue.bold('Title: '), chalk.white.bold(`${title}`));
  console.log(chalk.blue.bold('Body: '), chalk.white.bold(`${noteBody}`));
  console.log(`\n`);
};

module.exports = {
  addNote,
  removeNote,
};
