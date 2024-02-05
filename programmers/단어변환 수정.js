function solution(begin, target, words) {
    var answer = 0;
    if (!words.includes(target)) return answer = 0;

    let visited = Array(words.length).fill(0)
    answer = dfs(begin, 0,visited);
    
    //백트래킹
    function dfs(now, cnt, visited) {
        console.log(now,visited)
        if (now === target) {
            return cnt
        } else {
            for (let word of words) {
                console.log(word)
                let n = 0;
                for (let i=0; i<word.length; i++) {
                  if (word[i]==now[i]) {
                        n++;
                    }
                }
             if (n === word.length-1 && visited[now]===0) {
                visited[words.indexOf(word)] = 1;
                console.log(visited);
                dfs(word,cnt++,visited);
                }
            }
        }
    }
    
    return answer;
}

console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]));
