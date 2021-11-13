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

const getNotes = () => {
  const notes = loadNotes();

  if (!notes.length) {
    const message = `No note founds. Try do add some with the ${chalk.white(
      `"add"`,
    )} command (;`;
    const separator = textSeparator(message.length - 10);
    console.log(chalk.red.bold(separator));
    console.log(chalk.red.bold(message));
    console.log(chalk.red.bold(separator));

    return;
  }

  const message = `Your notes`;
  const separator = textSeparator(message.length);
  console.log(chalk.green.bold(separator));
  console.log(chalk.green.bold(message));
  console.log(chalk.green.bold(separator));

  notes.forEach(({ title }, index) => {
    const noteNumber = index + 1;
    const indexLength = noteNumber.toString().length;
    const notePrefix = indexLength === 1 ? '00' : indexLength === 2 ? '0' : '';
    const noteNumberFormatted = `${notePrefix}${noteNumber}`;

    console.log(
      chalk.blue.bold(`${noteNumberFormatted} -`),
      chalk.white.bold(`${title}`),
    );
  });
  console.log(`\n`);
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((item) => item.title === title);

  if (!note) {
    const message = `Note not found: ${chalk.white(`"${title}"`)}`;
    const separator = textSeparator(message.length - 10);
    console.log(chalk.red.bold(separator));
    console.log(chalk.red.bold(message));
    console.log(chalk.red.bold(separator));

    return;
  }

  const message = `Your note`;
  const separator = textSeparator(message.length);
  console.log(chalk.green.bold(separator));
  console.log(chalk.green.bold(message));
  console.log(chalk.green.bold(separator));
  console.log(chalk.blue.bold('Title:'), chalk.white.bold(`${note.title}`));
  console.log(chalk.blue.bold('Body:'), chalk.white.bold(`${note.body}`));
  console.log(`\n`);
};

module.exports = {
  addNote,
  removeNote,
  getNotes,
  readNote,
};
