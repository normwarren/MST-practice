const functions = {
  add: (num1, num2) => num1 + num2,
  // add: function(num1, num2) {
  //   return num1 + num2
  isNull: () => null,
  checkVal: x => x,
  createUser: () => {
    const user = { firstName: "Norm" };
    user["lastName"] = "Warren";
    return user;
  }
};

module.exports = functions;
