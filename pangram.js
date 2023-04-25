//pangram js program 
function isPangram(string){
  //...
  let str = string.toLowerCase();
  let aplh = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i = 0;  i<aplh.length; i++)
      {
        if(str.indexOf(aplh[i]) < 0) // indexof find the index of char as if there is not any char then it will return -1 
        {
          return false
        }
      }
    return true;
}
