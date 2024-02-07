function solution(n) {
   let answer = [];

   hanoi(n, 1, 3, 2);

   function hanoi(num, from, to, other) {
    if (num === 0) return;
    hanoi(num-1, from, other, to);
    answer.push([from,to])    
    hanoi(num-1, other, to, from);
    //
   }

    return answer;
}

console.log(solution(2));