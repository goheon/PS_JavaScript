function solution(s, skip, index) {
    var answer = '';
    const skipCharCode = skip.split("").map((el)=>el.charCodeAt(0));
    const sArr = s.split("");
    for (char of sArr) {
        let charCode = char.charCodeAt(0);
        let max = charCode + index;
        let cnt = 0;
        
        for (skip of skipCharCode) {
            if (charCode<skip && skip<=max) cnt++;
        }
        
        let newCharCode = max + cnt;
        
        if (newCharCode > 'z'.charCodeAt(0)) {
            newCharCode = newCharCode - 26;
        }
        
        let newChar = String.fromCharCode(newCharCode);

        answer = answer + newChar;
    }
    return answer;
}

console.log(solution('zzzz','wbqd', 5))