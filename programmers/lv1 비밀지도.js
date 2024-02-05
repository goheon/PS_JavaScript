function solution(n, arr1, arr2) {
    var answer = [];
    let map1 = [];
    let map2 = [];
    for (let i=0; i<arr1.length; i++) {
    let line1 = arr1[i].toString(2).split("");
    let line2 = arr2[i].toString(2).split("");

        if (line1.length < n) {
            let cnt = n - line1.length;
            for (let i=0; i<cnt; i++) {
                line1.unshift("0");
            }
        }
        if (line2.length < n) {
            let cnt = n - line2.length;
            for (let i=0; i<cnt; i++) {
                line2.unshift("0");
            }
        }

        let newline = "";
        for (let i=0; i<line1.length; i++) {
            if (line1[i]==0 && line2[i]==0) {
                newline = newline + " ";
            }
            if (line1[i]==1 || line2[i]==1) {
                newline = newline + "#";
            }
        }

        answer.push(newline);
    }
    return answer;
}