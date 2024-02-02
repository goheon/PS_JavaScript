function solution(begin, target, words) {
    var answer = 0;
    if (!words.includes(target)) return answer = 0;
    answer = dfs(begin, 0);
    
    //백트래킹
    function dfs(now, cnt) {
        if (now === target) {
            return cnt
        } else {
            for (let word of words) {
                let n = 0;
                for (let i=0; i<word.length; i++) {
                  if (word[i]==now[i]) {
                        n++;
                    }
                }
             if (n === word.length-1 /*&& 방문배열 체크*/) {
                dfs(word,cnt++)
                }
            }
        }
    }
    
    return answer;
}