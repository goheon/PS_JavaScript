function solution(name) {
    let ans;
    const AtoZ = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let neededMove = [];
    for (let i=0; i<name.length; i++) {
        let idx = AtoZ.indexOf(name[i])
        // 최소 상하 움직임
        if (idx > AtoZ.length/2) {
            idx = AtoZ.length-idx
        }
        neededMove.push(idx)
    }
    
    let upDown = neededMove.reduce((sum,now)=>sum+now,0)
    console.log(neededMove)
    //A가 있을 때 최소 좌우 움직임?(neededMove에 0이 있을 때)
    // ABAABA, BAABA, BBAAB

    
    console.log(neededMove.reverse())
    

    return ans
}

solution('JAZ');