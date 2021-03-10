const ar = [1, 2, 1, 2, 1, 3, 2];
const n = 7;
function sockMerchant(n, ar) {
  let map = {};
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    if (!map[ar[i]]) {
      map[ar[i]] = 1;
    } else {
      map[ar[i]]++;
    }
  }
  Object.values(map).forEach((values) => {
    if (values % 2 === 0) {
      total += values / 2;
      console.log(values, total);
    } else {
      let newValue = values - 1;
      total += newValue / 2;
      console.log(values, total, "else");
    }
  });
  console.log(total);
  return total;
}
sockMerchant(n, ar);
