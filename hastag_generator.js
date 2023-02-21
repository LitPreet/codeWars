function generateHashtag (str) {
  if(str.trim() === '') return false;
    const stringToCamel = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')

    const str2 = `#${stringToCamel.trim()}`;
    return str2.length > 140 ? false : str2
}
