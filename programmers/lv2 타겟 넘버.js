function solution(numbers, target) {
    var answer = 0;
    dfs(numbers, target, 0, 0);
    return answer;


    function dfs(numbers, target, idx, sum) {
        if(numbers.length === idx) {
            if(target === sum) return answer++
        } else {
           dfs(numbers, target, idx+1, sum+numbers[idx]);
            dfs(numbers, target, idx+1, sum-numbers[idx]);
        }
    }
}