function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denum = numer1 * denom2 + numer2 * denom1;
    const numer = denom1 * denom2;
    
    let minNum;
    if(denum < numer){
        minNum = denum;
    }else{
        minNum = numer;
    }
    
    while(true){
    if(denum % minNum === 0){
        if(numer % minNum === 0){  
         return [denum / minNum , numer / minNum ]; 
        }            
    }
        minNum --;
    }
}

//1.분모덧셈
//2.분자분모의 최대공약수로 나눔