const bar = [1, 2, 1, 3, 2];
const day = 3;
const month = 2;
function birthday(s, d, m) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let subArr = s.slice(i, i + m);
    let sum = 0;
    for (node of subArr) {
      sum += node;
    }
    if (sum === d) {
      total++;
    }
  }
  return total;
}
birthday(bar, day, month);
