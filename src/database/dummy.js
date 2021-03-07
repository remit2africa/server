let data = [
  {
    id: 1,
    name: "Skrill",
    days: 1,
    site: "www.skrill.com",
    countries: ["Angola", "Portugal", "Gambia"],
    reviews: reviewsModel.reviews(this.id),
  },
  {
    id: 1,
    name: "Azimo",
    days: 1,
    site: "www.azimo.com",
    countries: ["Portugal", "Gambia"],
    reviews: reviewsModel.reviews(this.id),
  },
];

module.exports = data;
