const { readFileSync, writeFileSync } = require('fs');

const saveNotes = (notes) => writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
  try {
    const dataBuffer = readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch {
    return [];
  }
};

const textSeparator = (numberOfHyphens) => `\n${'-'.repeat(numberOfHyphens)}\n`;

module.exports = {
  saveNotes,
  loadNotes,
  textSeparator,
};
