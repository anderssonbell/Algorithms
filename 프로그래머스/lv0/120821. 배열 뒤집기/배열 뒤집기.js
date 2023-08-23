function solution(num_list) {
    const newArray = [];
    for(let cnt = num_list.length - 1;cnt >= 0;cnt--){
        newArray.push(num_list[cnt]);
    }
    return newArray;
}