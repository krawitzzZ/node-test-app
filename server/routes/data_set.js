module.exports = function (req, res) {
  var products = [
    {item: "banana", type: "fruit"},
    {item: "pear", type: "fruit"},
    {item: "apple", type: "fruit"},
    {item: "cucumber", type: "vegetable"},
    {item: "tomato", type: "vegetable"},
    {item: "potatoes", type: "vegetable"}
  ];

  var randomCount = randomInteger(0, products.length - 1);
  var chosenProduct = products[randomCount];

  res.json(chosenProduct);

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
};
