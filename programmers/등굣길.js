function solution(m, n, puddles) {
    
    //map과 웅덩이 초기화
    let map =  Array.from(new Array(m), () => new Array(n).fill(0));
    
    for (puddle of puddles) {
        map[puddle[0]-1][puddle[1]-1] = -1;
    }

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    function bfs() {
        let queue = [[0,0]];
        while(!queue.isEmpty) {
            const [x,y] = queue.shift();
            
            if((x===m-1)&&(y===n-1))return map[x][y]+1;
            
            for (let i=0; i<2; i++) {
                let newX = x+dx[i];
                let newY = y+dy[i];
                
                if (newX >= m || newY >= n || map[x][y]=== -1) {
                    continue
                }

                if (map[newX][newY]===0) {
                    if (map[newX-1]===undefined || map[newY-1]===undefined ) {
                        continue;
                    }
                    if (map[newX-1][newY]=== -1) {
                        map[newX][newY] = map[newX][newY-1]
                    } else if (map[newX][newY-1]=== -1) {
                        map[newX][newY] = map[newX-1][newY];
                    } else {
                        map[newX][newY] = map[newX-1][newY] + map[newX][newY-1];
                    }
                    queue.push([newX,newY]);
                }
            }
        }
    }
    
    return bfs();
}

console.log(solution(4,3,[[2,2]]))