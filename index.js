// declare customerName to be bob in global scope
var customerName = "bob";

// modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer
var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}

// overwrites the best customer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// changeLeastFavoriteCustomer
const leastFavoriteCustomer = "someone";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new customer"; // this will throw an error because it's const
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};

