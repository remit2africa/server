const io = require("socket.io-client");

const socket = io("ws://localhost:8080");

socket.on("__init", (msg) => console.log(msg));

function getCountriesAndCurrencies() {
  socket.emit("get_countries_and_currencies");
  socket.emit("get_live_exchanges_rates", { base: "usd" });
}

socket.on("get_countries_and_currencies", (data) => {
  console.log("> Countries and currencies ");
  console.log(data);
});

socket.on("live_exchanges_rates", (data) => {
  console.log("> Live exchanges rates");
  console.log(data);
});

getCountriesAndCurrencies();
