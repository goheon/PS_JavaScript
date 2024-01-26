function solution(numbers) {
    let answer = '';
    
    numbers = numbers.map(numbers=>numbers+'');
    
    numbers.sort((a,b)=>((b+a)-(a+b)));
    
    answer = numbers.join('');
    
    if(answer[0] === '0'){
        answer = '0';
    }
    
    return answer;
    }