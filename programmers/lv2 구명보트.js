function solution(people, limit) {
    people.sort((a,b)=>a-b);
    var answer = 0;
    while (people.length !== 0) {
        let now = people.pop();
        if (people[0] + now <= limit) {
            people.shift();
        }
        answer++;
    }
    
    return answer;
}

//배열을 정렬시키는 아이디어 필요 
//가장 무거운 사람은 가장 가벼운 사람과 구명보트에 타지 못한다면 무조건 혼자 타야 함 → 비교를 위한 순회가 불필요해지며 시간 복잡도가 급감