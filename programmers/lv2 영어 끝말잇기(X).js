function solution(n, words) {
    var answer = [];
    let arr = [];
    //첫 번째 단어 추가, 단어 길이 확인
    arr.push(words[0]);
    
    for (let i=1; i<words.length; i++) {
        //단어를 가지고 있지 않고 앞 단어의 마지막 글자가 같고 단어 길이가 1글자 초과
        if (!arr.includes(words[i]) && arr[arr.length-1][arr[arr.length-1].length-1] == words[i][0]) {
            //앞 단어의 마지막 글자가 같다면
                arr.push(words[i])
            } else {
                answer = target(i, n);
                break;
            }
    }
    
    //통과 시
    if (answer.length==0) {
        answer = [0,0]
    }
    
    
    function target(i, n) {
        let num = i+1;
        let who;
        if (num%n=== 0) {
            who = num/n
        } else {
            who = num%n
        };
        let times = Math.ceil(num/n);
        return [who,times]
    }
    
    
    return answer;
}