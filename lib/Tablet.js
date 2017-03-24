function Tablet() {}

Tablet.prototype.touch = function(x, y) {
    return {
      x : x,
      y : y
    };
};

module.exports = Tablet;