module.exports = function check(str, bracketsConfig) {
  // your solution
    let bracketsArray = [].concat(...bracketsConfig);

    let inverse = (symbol) => {
        let ind = bracketsArray.indexOf(symbol);
        if(ind === -1){
            return symbol;
        }
        if(ind % 2 === 0) {
            return bracketsArray[ind + 1];
        }
    }

    let arr = [str[0]];
    for(let i = 1; i < str.length; i++){
        if(str[i] === inverse(arr[arr.length - 1])){
            arr.pop();
        }
        else {
            arr.push(str[i]);
        }
    }
    return arr.length === 0;
}
