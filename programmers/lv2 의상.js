//답안 코드 작성 및 내용
function solution(clothes) {
    let obj = new Object();
    for (let i=0; i<clothes.length; i++) {
        let type = clothes[i][1];
        obj[type] = [];
    }
    for (let i=0; i<clothes.length; i++) {
        let cloth = clothes[i][0];
        let type = clothes[i][1];
        obj[type].push(cloth);
    }
    var temp = 1;
    for (let i=0; i<Object.values(obj).length; i++) {
        temp = temp * (Object.values(obj)[i].length + 1);
    }
    answer = temp - 1;
    return answer;
}