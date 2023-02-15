let phrase = "Hey fellow warriors";
const spinWords =(phrase)=>
{
  console.log(phrase);

  let phraseArray = phrase.split(" ");
  console.log(phraseArray);

  const reverseString = (string)=>{
    return string.split('').reverse().join('');
  }
for(let i = 0; i<phraseArray.length; i++)
  {
    if(phraseArray[i].length>=5)
    {
      const word = phraseArray[i];
      phraseArray[i] = reverseString(word);
    }
  }
  return console.log(phraseArray.join(' '));
}
spinWords(phrase);
