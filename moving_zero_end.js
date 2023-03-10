function moveZeros(arr) {
  let zeros=[];
  arr = arr.filter(item => (item!==0 ? true : zeros.push(item) && false));
  
  return arr.concat(zeros);
}
