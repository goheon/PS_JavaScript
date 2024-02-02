function solution(s, skip, index) {
    var answer = '';
    const skipCharCode = skip.split("").map((el)=>el.charCodeAt(0));
    const sArr = s.split("");
    console.log(skipCharCode)
    for (char of sArr) {
        let charCode = char.charCodeAt(0);
        let range = [];
        
        // 변환 범위 배열 range 생성
        for (let i=1; i<= index; i++) {
            if (charCode + i > 'z'.charCodeAt(0)) {
                range.push(charCode + i - 26);
            } else {
                range.push(charCode + i);
            }
        }
        range.sort((a,b)=>a-b);
        skipCharCode.sort((a,b)=>a-b);
        // skip 갯수 탐색
        for (s of skipCharCode) {
            if (range.includes(s)) {
                range.shift();
                range.push(range[range.length-1]+1);
            }
        }
        console.log(charCode,range)
        // 변환된 문자열
        let newCharCode = range[range.length-1]
        if (newCharCode > 'z'.charCodeAt(0)) {
            newCharCode = newCharCode - 26;
        }
        
        let newChar =  String.fromCharCode(newCharCode);
        answer = answer + newChar;
    }
    return answer;
}


console.log(solution('a','bc',1))