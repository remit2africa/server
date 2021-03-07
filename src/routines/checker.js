const data = require("../database/dummy");

function check({ from, to }) {
  let providers = data.filter(
    (item) => item.countries.includes(from) && item.countries.includes(to)
  );
  return providers;
}

module.exports = check;
