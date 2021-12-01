const { builtinModules } = require("module");


const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data)
  })
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: AAA')
    const direction = ['up', 'down', 'left', 'right']
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    setInterval(() => {
      const random = getRandomArbitrary(0, 4)
      conn.write(`Move: ${direction[random]}`)
    }, 200); 
  })
  return conn;
};

module.exports = { connect }