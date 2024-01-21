function solution(answers) {
    var answer = [];
    let cnt1 = 0, cnt2 = 0, cnt3 = 0;
    const type1 = [1, 2, 3, 4, 5];
    const type2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const type3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i=0; i<answers.length; i++) {
        let ind1 = i%type1.length;
        let ind2 = i%type2.length;
        let ind3 = i%type3.length;
        if (answers[i] == type1[ind1]) {
            cnt1++;
        }
        if (answers[i] == type2[ind2]) {
            cnt2++;
        }
        if (answers[i] == type3[ind3]) {
            cnt3++;
        }
    }

    const top = Math.max(cnt1,cnt2,cnt3);
    const topArr = [cnt1, cnt2, cnt3];

    
    for (let i=1; i<=3; i++) {
        if (top == topArr[i-1]) {
            answer.push(i)
        }
    }

    return answer;
}