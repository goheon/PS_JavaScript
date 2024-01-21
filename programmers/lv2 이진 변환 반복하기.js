function solution(s) {
    var answer = [];
    let cnt = 0;
    let cnt0 = 0;
    while(s!=1) {
        let s1 = s.split('').filter((el)=>el==1).join('');
        cnt0 = cnt0 + s.length-s1.length;
        cnt++;
        s = s1.length.toString(2);
    }
    answer = [cnt,cnt0]
    return answer;
}