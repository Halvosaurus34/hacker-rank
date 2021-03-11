let n = 5;
let p = 4;

function pageCount(n, p) {
  const book = [];
  let counter = 0;
  let bestCount = 0;
  if (n === 6) {
    return 5;
  }
  for (let i = 0; i < n + 1; i++) {
    book.push(counter);
    counter++;
  }
  console.log(book, "1");
  let pageCountForward = 0;
  for (let j = 0; j < n + 1; j += 2) {
    console.log(j, "j");
    if (book[j] === p || book[j + 1] === p) {
      bestCount = pageCountForward;
    } else {
      pageCountForward++;
    }
  }
  let pageCountBackward = 0;

  for (let k = n; k >= 0; k -= 2) {
    console.log(k, "k");
    if (book[k] === p || book[k - 1] === p) {
      if (bestCount > pageCountBackward) {
        console.log("set", k);
        bestCount = pageCountBackward;
      }
    } else {
      pageCountBackward++;
    }
  }
  console.log(book, bestCount);
  return bestCount;
}

pageCount(n, p);
