// break and continue

// break will stop the code once a condition is met.

// continue will skip a piece of code and continue with the next iteration.

const scores = [50, 45, 89, 0, 30, 858, 100, 239, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] >= 100){
        console.log(' well done, you scored 100 or more');
        break;
    }
}