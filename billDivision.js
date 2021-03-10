let k = 1;
let bill = [3, 10, 2, 9];
let b = 12;

function bonAppetit(bill, k, b) {
  let billSum = 0;
  bill.splice(k, 1);
  bill.forEach((num) => {
    billSum += num;
  });
  if (billSum / 2 === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - billSum / 2);
  }
}

bonAppetit(bill, k, b);
