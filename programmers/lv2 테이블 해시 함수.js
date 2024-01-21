function solution(data, col, row_begin, row_end) {
    var answer = 0;
    //xor 연산 -> ^
    
    //data 정렬
    data.sort((a,b)=>{
        if (a[col-1]===b[col-1]) {
            return b[0]-a[0]
        } else {
            return a[col-1]-b[col-1]
        }
    })
    
    //S_i를 구하고 하나의 배열에 저장
    let S_iArr = [];
    for (let i=row_begin-1; i<row_end; i++) {
       S_iArr.push(data[i].reduce((sum,now)=> sum + now%(i+1),0))
    }
    
    
    let xor = S_iArr[0];
    for (let i=1; i<=S_iArr.length; i++) {
        xor = xor ^ S_iArr[i];
    }
    answer = xor 
    return answer;
}