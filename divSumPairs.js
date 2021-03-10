let ar = [1, 3, 2, 6, 1, 2];
let k = 3;
let n = 6;
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    ar.map((num, index) => {
      console.log(num, ar[0], num + ar[0]);
      if (index !== 0 && num + ar[0] === k) {
        count++;
        console.log("added", num, ar[0]);
      } else if (index !== 0 && (num + ar[0]) % k === 0) {
        count++;
        console.log("added div", num, ar[0]);
      }
    });
    ar.splice(0, 1);
    console.log(ar);
  }
  console.log(count);
  return count;
}

divisibleSumPairs(n, k, ar);
