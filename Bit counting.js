//bit counting
var countBits = function(n) {
  // Program Me
  if(n)
    {
      return n.toString(2).match(/1/g).length;
    }
  return 0;
};
