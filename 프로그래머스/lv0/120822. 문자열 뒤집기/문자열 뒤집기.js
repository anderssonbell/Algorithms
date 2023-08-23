function solution(my_string) {
    let newString = '';
    for(let cnt = my_string.length -1;cnt >= 0; cnt--){
        newString += my_string[cnt]
    }
    return newString;
}