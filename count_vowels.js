//count vowel js
//first method
function getCount(str) {
  let count = 0;
  const vowels = new Array('a','e','i','o','u');
  for(let char of str)
    {
      if(vowels.includes(char)){
        count++;
      }
    }
  return count;
}

// second method
function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}
