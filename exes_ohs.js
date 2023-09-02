//exe
function XO(str) {
    //code here
     let x = str.match(/x/gi);
    let o =  str.match(/o/gi);
    return (x && x.length) == (o && o.length)
}
