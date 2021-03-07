const io = require("socket.io")(8080); // Instaciate the Socket Io server
const App = require("./src/app");

new App(io).run(); // Put all together
