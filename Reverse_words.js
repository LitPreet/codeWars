//reverse words program 
function reverseWords(str) {
  // Go for it
 
   return str.split('')
             .reverse()
             .join('')
             .split(' ')
             .reverse()
             .join(' ')
  
}
