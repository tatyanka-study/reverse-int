module.exports = function reverse (n) {

    let numberToString = n.toString().split('').reverse().join('');
    
    return parseInt(numberToString, 10); 
}
