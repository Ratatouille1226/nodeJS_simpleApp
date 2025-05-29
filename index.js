const yargs = require("yargs");
const { addNote, printNotes, removeNote } = require("./notes.controller");

yargs.command({
  command: "add", //Какая команда запускает
  describe: "Add new note tom list",
  builder: {
    //Что хотим получить
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    //Что будет выполняться
    addNote(title);
  },
});

yargs.command({
  command: "list", //Какая команда запускает
  describe: "Print all notes",
  async handler() {
    //Что будет выполняться
    printNotes();
  },
});

yargs.command({
  command: "remove", //Какая команда запускает
  describe: "Remove note by id",
  builder: {
    //Что хотим получить
    id: {
      type: "string",
      describe: "Note uniq id",
      demandOption: true,
    },
  },
  handler({ id }) {
    //Что будет выполняться
    removeNote(id);
  },
});

yargs.parse();
