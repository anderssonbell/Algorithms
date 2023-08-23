function solution(n) {
    var answer = 0;
    for(let pizzacount = 1;;pizzacount++){
        if(pizzacount * 6 % n === 0){
            return pizzacount;
        }
    }
    return answer;
}