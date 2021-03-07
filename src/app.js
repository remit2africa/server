const axios = require("axios");

class App {
  constructor(io) {
    this.io = io;
  }

  actions() {
    let io = this.io;
    io.on("connect", (socket) => {
      socket.emit("__init", "Sucessfully Connected!");

      socket.on("get_countries_and_currencies", async () => {
        try {
          const { data } = await axios.get(
            "https://restcountries.eu/rest/v2/all"
          );
          let content = [];
          data.map((item) =>
            content.push({ name: item.name, currencies: item.currencies })
          );
          socket.emit("get_countries_and_currencies", content);
        } catch (error) {
          socket.emit("get_countries_and_currencies", {
            error: error.message,
          });
        }
      });

      socket.on("get_live_exchanges_rates", async ({ base }) => {
        console.log("> give the live exchange");
        const { data } = await axios.get(
          "https://api.exchangeratesapi.io/latest?base=USD"
        );
        socket.emit("live_exchanges_rates", data);
      });

      socket.on("check-provider", ({ from, to, base }) => {});
    });
  }

  run() {
    this.actions();
  }
}

module.exports = App;
