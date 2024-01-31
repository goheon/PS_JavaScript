//큐 구현
class Queue {
    constructor() {
  
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      return this.items[0];
    }
  
    getSize() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.getSize() === 0;
    }
  }
  
  function solution(maps) {
      //하나의 인덱스로 상,우,하,좌 순으로 탐색할 수 있도록
      //dx, dy 배열 선언
      const dx=[0,1,0,-1];
      const dy=[1,0,-1,0];
      // 가로와 세로를 width, height로 저장
      const width=maps[0].length;
      const height=maps.length;
      // 빈 방문 배열 선언
      const visit=Array.from({length:height},()=>Array(width).fill(0));
      //Array.from(ArrayLike, mapFn)
      // -> ArrayLike: 배열로 변환할 순회 가능 또는 유사 배열 객체
      //visit은 길이가 height인 배열이며 각 원소는 Array(width).fill(0)로 길이가 width이며 모든 원소가 0임
      function bfs(){
          const queue=new Queue();
          //bfs 함수에서 큐를 선언하고 [0,0]을 초기화
          queue.enqueue([0,0]);
          
      
          while(!queue.isEmpty()){
  
              //현재 위치
              const [x,y]= queue.dequeue();
  
              //마지막 위치(상대편 진영)에 도달했다면 거리 리턴
              if((x===height-1)&&(y===width-1))return visit[x][y]+1;
              
              //현재 위치에서 상하좌우탐색
              for(let a=0;a<4;a++){
               let newX=x+dx[a];
               let newY=y+dy[a]; 
                  //맵 밖으로 벗어난 경우, 길이 아닌 경우 continue
                  if (newX < 0 || newY < 0 || newX >= height || newY >= width || maps[newX] === undefined || maps[newX][newY] === undefined || maps[newX][newY] === 0) {
      continue;
  }
                  //방문 배열의 값이 0 -> 방문하지 않은 경우
                  if(visit[newX][newY]===0){
                      //해당 위치까지의 누적 이동 거리를 입력
                       visit[newX][newY]=visit[x][y]+1;
                //     console.log('newX newY',newX,newY);
                      //탐색 가능한 곳을 큐에 추가 -> 이동 가능 한 좌표이기에 해당 위치에서 다시 탐색
                      queue.enqueue([newX,newY]);  
                  }
  
  
              }
              //탐색 종료
          }
          //while문 종료-> while문이 종료될 때(큐가 빌 때)까지 리턴하지 못했다면 끝까지 도달할 수 없음
          return -1;
      }
      return bfs();
  }