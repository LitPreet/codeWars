function isPangram(string){
  //...
  let str = string.toLowerCase();
  let aplh = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i = 0;  i<aplh.length; i++)
      {
        if(str.indexOf(aplh[i]) < 0)
        {
          return false
        }
      }
    return true;
}
