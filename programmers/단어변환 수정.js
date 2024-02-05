function solution(begin, target, words) {
    var answer = [];
    if (!words.includes(target)) return answer = 0;
    for (let i=0; i<words.length; i++) {
        let visited = Array(words.length).fill(0)
        let word = words[i];
        dfs(begin, 0, visited);
        console.log(answer)
    }
    
    //백트래킹
    function dfs(now, cnt, visited) {
        console.log(now, cnt, visited)
        if (now === target) {
            answer.push(cnt);
        } else {
            for (let word of words) {
                if (visited[words.indexOf(word)]===0) {
                 let n = 0;
                  for (let i=0; i<word.length; i++) {
                    if (word[i]==now[i]) {
                        n++;
                    }
                  }
                 if (n === word.length-1) {
                        visited[words.indexOf(word)] = 1;
                        console.log(visited);
                        dfs(word,cnt+1,visited);
                    }
                }
            }
        }
    }
    
    return answer;
}

console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]));
