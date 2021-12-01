const { builtinModules } = require("module");

let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    connection.write("Move: up")
  }
  if (key === '\u0064') {
    connection.write("Move: right")
  }
  if (key === '\u0073') {
    connection.write("Move: down")
  }
  if (key === '\u0061') {
    connection.write("Move: left")
  }
  if (key === 'i') {
    connection.write("Say: can you help me?")
  }
  if (key === 'o') {
    connection.write("Say: i need 2 find my son")
  }
  if (key === 'p') {
    connection.write("Say: his name is nemo")
  }
};


const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput }