function solution(n, computers) {
    const visited = new Array(n).fill(0)
    let count = 0;

    for (let i=0; i<visited.length; i++) {
        if (visited[i] === 1) continue;

        count += 1;
        dfs(computers, visited, i);
    }

    return count;
}

function dfs(computers, visited, idx) {
    visited[idx] = 1;

    for (let i=0; i<computers[idx].length; i++) {
        if ( computers[idx][i] && visited[i] === 0) {
            dfs(computers, visited, i);
        }
    }
}
