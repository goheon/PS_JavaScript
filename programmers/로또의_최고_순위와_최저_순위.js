function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0;
    let zeroCnt = 0;
    let max, min;
    
    for (num of lottos) {
        if (win_nums.includes(num)) {
            cnt++;
            win_nums.splice(win_nums.indexOf(num),1)
        }
        if (num === 0) {
            zeroCnt++;
        }
    }
    
    if (cnt === 6) return answer = [1,1];
    
    if (win_nums.length >= zeroCnt) {
        max = cnt + zeroCnt;
        min = cnt;
    } else {
        max = cnt + win_nums.length;
        min = cnt;
    }
    answer = [rank(max), rank(min)];
    
    function rank(num) {
        switch(num) {
            case 6 : return 1;
            case 5 : return 2;
            case 4 : return 3;
            case 3 : return 4;
            case 2 : return 5;
            default: return 6;
        }
    }
    return answer;
}