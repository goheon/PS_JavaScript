function solution(s, skip, index) {
    const skipCharCode = skip.split("").map((el)=>el.charCodeAt(0));
    const sArr = s.split("");
    var answer = '';
    for (char of sArr) {
        let charCode = char.charCodeAt(0);
        for (let i=1; i<=index; i++) {
            charCode +=1;
            if (charCode > 'z'.charCodeAt(0)) {
                charCode = charCode-26;
            }
            while (skipCharCode.includes(charCode)) {
                charCode +=1;
                if (charCode > 'z'.charCodeAt(0)) {
                    charCode = charCode - 26;
                }
            }
        }
        if (charCode > 'z'.charCodeAt(0)) {
            charCode = charCode - 26;
        }
        
        answer = answer + String.fromCharCode(charCode);
    }
    return answer;
}