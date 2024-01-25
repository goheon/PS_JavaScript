function solution(n,a,b) {
    var answer = 0;
    if (a<b) { 
        while(a+1 != b) {
            if(a%2==0) {
                a=a/2;
            } else {
                a=(a+1)/2;
            }
            
            if(b%2==0) {
                b=b/2;
            } else {
                b=(b+1)/2;
            }
            answer++;
        }
        answer++;
        //1234에 2,3인 경우
        
    } else {
        while(a != b+1) {
            if(a%2==0) {
                a=a/2;
            } else {
                a=(a+1)/2;
            }
            
            if(b%2==0) {
                b=b/2;
            } else {
                b=(b+1)/2;
            }
            answer++;
        }
        answer++;
    }
    return answer;
}

// 테스트케이스 7, 9, 27, 33