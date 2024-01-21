function solution(n) {
    var answer = 1;
    for (let i=1; i<n; i++) {
        let sum = 0;
        if (i+(i+1) > n) continue
        for (let j=i; j<n; j++) {
            sum = sum + j;
            if (sum > n) break;
            if (sum == n) answer++;
        }
        
    }
    return answer;
}