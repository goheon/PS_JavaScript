function solution(priorities, location) {
    var answer = 0;
    const arr = [];
    
    for (let i=0; i<priorities.length; i++) {
        arr.push([priorities[i], i]);
    }
    let target = arr[location];
    function skip() {
        let temp = arr.shift();
        arr.push(temp);
    }
    
    function run() {
        arr.shift();
        answer++;
    }
    
    function go() {
        if(arr[0][0]>=Math.max.apply(null, arr.map((el)=>el[0]))) {
            run();
        } else {
            skip();
        }
    }
    
    while(arr.includes(target)){
        go()
    }
    return answer;
}