function solution(genres, plays) {
    var answer = [];
    let genresArr = [];
    let sumArr = [];
    for (let i=0; i<plays.length; i++) {
        if (genresArr.includes(genres[i])) {
            let target = sumArr[genresArr.indexOf(genres[i])];
            sumArr[genresArr.indexOf(genres[i])] = target + plays[i];
        } else {
            genresArr.push(genres[i]);
            sumArr.push(plays[i]);
        }
        plays[i] = [plays[i],genres[i]];
    }
    console.log(genresArr, sumArr, plays)
//장르배열, 재생 횟수 합 배열, 합쳐진 plays 배열
    while(true) {
        if (sumArr.length === 0) {
            break
        }
        let topGenreIdx = sumArr.indexOf(Math.max(...sumArr));
        let topGenre = genresArr[topGenreIdx];
        sumArr.splice(topGenreIdx,1);
        genresArr.splice(topGenreIdx,1);
        
        let temp1=0, temp2=0;
        for (let i=0; i<plays.length; i++) {
            if (plays[i][1]==topGenre) {
                //100, 100
                //100, 100, 100
                if (temp1 < plays[i][0] && temp2 < plays[i][0]) {
                    temp2 = temp1;
                    temp1 = plays[i][0];
                } else if ( temp1 >= plays[i][0] && temp2 < plays[i][0]) {
                    temp2 = plays[i][0];
                }
            }
        }
        console.log(temp1, temp2)
        if (temp1 == temp2) {
            for (let i=0; i<plays.length; i++) {
                if (plays[i][0]==temp1 && plays[i][1]==topGenre) {
                    answer.push(i)
                    for (let j=i+1; j<plays.length; j++) {
                        if (plays[j][0]==temp2 && plays[j][1]==topGenre) {
                            answer.push(j)
                            break;
                        }
                    }
                    break;
                }
            }
        } else {
        for (let i=0; i<plays.length; i++) {
            if (plays[i][0]==temp1 && plays[i][1]==topGenre) {
                answer.push(i)
            }
        }
        for (let i=0; i<plays.length; i++) {
            if (plays[i][0]==temp2 && plays[i][1]==topGenre) {
                answer.push(i)
            }
        }
        }
    }
    return answer;
}function solution(genres, plays) {
    var answer = [];
    let genresArr = [];
    let sumArr = [];
    for (let i=0; i<plays.length; i++) {
        if (genresArr.includes(genres[i])) {
            let target = sumArr[genresArr.indexOf(genres[i])];
            sumArr[genresArr.indexOf(genres[i])] = target + plays[i];
        } else {
            genresArr.push(genres[i]);
            sumArr.push(plays[i]);
        }
        plays[i] = [plays[i],genres[i]];
    }
    console.log(genresArr, sumArr, plays)
//장르배열, 재생 횟수 합 배열, 합쳐진 plays 배열
    while(true) {
        if (sumArr.length === 0) {
            break
        }
        let topGenreIdx = sumArr.indexOf(Math.max(...sumArr));
        let topGenre = genresArr[topGenreIdx];
        sumArr.splice(topGenreIdx,1);
        genresArr.splice(topGenreIdx,1);
        
        let temp1=0, temp2=0;
        for (let i=0; i<plays.length; i++) {
            if (plays[i][1]==topGenre) {
                //100, 100
                //100, 100, 100
                if (temp1 < plays[i][0] && temp2 < plays[i][0]) {
                    temp2 = temp1;
                    temp1 = plays[i][0];
                } else if ( temp1 >= plays[i][0] && temp2 < plays[i][0]) {
                    temp2 = plays[i][0];
                }
            }
        }
        console.log(temp1, temp2)
        if (temp1 == temp2) {
            for (let i=0; i<plays.length; i++) {
                if (plays[i][0]==temp1 && plays[i][1]==topGenre) {
                    answer.push(i)
                    for (let j=i+1; j<plays.length; j++) {
                        if (plays[j][0]==temp2 && plays[j][1]==topGenre) {
                            answer.push(j)
                            break;
                        }
                    }
                    break;
                }
            }
        } else {
        for (let i=0; i<plays.length; i++) {
            if (plays[i][0]==temp1 && plays[i][1]==topGenre) {
                answer.push(i)
            }
        }
        for (let i=0; i<plays.length; i++) {
            if (plays[i][0]==temp2 && plays[i][1]==topGenre) {
                answer.push(i)
            }
        }
        }
    }
    return answer;
}