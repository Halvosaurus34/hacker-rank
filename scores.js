const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let low = scores[0];
  let high = scores[0];
  const scoreArr = [0, 0];

  for (score of scores) {
    console.log(score);
    if (score > high) {
      high = score;
      scoreArr[0]++;
    }
    if (score < low) {
      low = score;
      scoreArr[1]++;
    }
  }
  console.log(scoreArr);
  return scoreArr;
}

breakingRecords(scores);
