//bit counting program js
var countBits = function(n) {
  // Program M
  if(n)
    {
      return n.toString(2).match(/1/g).length;
    }
  return 0;
};
