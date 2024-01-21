function solution(brown, yellow) {
    var answer = [];
    //x >= y
    // area = x * y
    // area = brown + yellow
    const area = brown + yellow;
    for (let x = 3; x < area/2; x++) {
        let y = area/x;
        if (y % 1 == 0 && x >= y && (x-2)*(y-2)==yellow) {
            answer = [x,y];
            break;
        }
    }
    return answer;
}