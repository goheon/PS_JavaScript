function solution(prices) {
    var answer = [];
    //while(answer.length === prices.length) {}
    for (let i=0; i<prices.length; i++) {
        let stack = [];
        let cnt = 0;
       for (let j=i+1; j<prices.length; j++) {
           if (prices[j]>=prices[i]){
           stack.push(prices[j]);
           } else {
               stack.push(prices[j]);
               break;
           }
       }
        while(stack.length!==0) {
            stack.pop();
            cnt++;
        }
        answer.push(cnt);
    }
    return answer;
}