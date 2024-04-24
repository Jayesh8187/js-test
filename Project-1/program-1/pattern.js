function patternprint(){
    let result = '';
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === 1 && j === 3 || i === 1 && j === 5 || i === 2 && j === 2 || i === 2 && j === 4 || i === 3 && j === 1 || i === 3 && j === 3 || i === 4 && j === 3 || i === 4 && j === 1){
                result += "*";
            }else{
                result += " ";
            }
        }
    }
    return result;
}

console.log(patternprint());