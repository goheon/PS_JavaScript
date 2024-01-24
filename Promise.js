// 3초를 기다린 후에 resolve하는 Promise를 반환하는 함수
function waitThreeSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Function 1: Waited for 3 seconds");
        resolve("Function 1 completed");
      }, 3000);
    });
  }
  
  // 5초를 기다린 후에 resolve하는 Promise를 반환하는 함수
  function waitFiveSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Function 2: Waited for 5 seconds");
        resolve("Function 2 completed");
      }, 5000);
    });
  }
  
  // 10초를 기다린 후에 resolve하는 Promise를 반환하는 함수
  function waitTenSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Function 3: Waited for 10 seconds");
        resolve("Function 3 completed");
      }, 10000);
    });
  }
  
  // Promise.all을 사용하여 3개의 함수를 동시에 실행
  async function parallelExecution() {
    const start = Date.now();
  
    const results = await Promise.all([
      waitThreeSeconds(),
      waitFiveSeconds(),
      waitTenSeconds(),
    ]);
  
    console.log("All functions completed in parallel");
    console.log("Results:", results);
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
  }
  
  // 동시에 실행되는 함수 호출
  parallelExecution();

    // 순차적으로 함수 실행
    async function sequentialExecution() {
        const result1 = await waitThreeSeconds();
        const result2 = await waitFiveSeconds();
        const result3 = await waitTenSeconds();
      
        console.log("All functions completed sequentially");
        console.log("Results:", result1, result2, result3);
      }
      
      // 순차적으로 실행되는 함수 호출
      sequentialExecution();
    