const fs = require("fs/promises"); //для обновления базы данных
const path = require("path"); //Для того чтобы указывать правильные пути
const chalk = require("chalk"); //Пакет для стилизации консоли

const notesPath = path.join(__dirname, "db.json"); //Правильный путь || а require("./db.json") - неправильный

async function addNote(title) {
  const notes = await getNotes();

  const note = {
    title: title,
    id: Date.now().toString(),
  };

  notes.push(note);
  await saveNotes(notes);
  console.log(chalk.bgGreen("Not was added"));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function saveNotes(notes) {
  await fs.writeFile(notesPath, JSON.stringify(notes));
}

async function printNotes() {
  const notes = await getNotes();

  console.log(chalk.bgBlue("Here is the list command"));
  notes.forEach((note) => {
    console.log(chalk.bgWhite(note.id), chalk.blue(note.title));
  });
}

async function removeNote(id) {
  const notes = await getNotes();

  const filteredId = notes.filter((note) => note.id !== id);
  await saveNotes(filteredId);
  console.log(chalk.red("Note has been removed"));
}

module.exports = {
  addNote,
  printNotes,
  removeNote,
};
