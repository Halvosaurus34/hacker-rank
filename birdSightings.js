let arr = [1, 4, 4, 4, 5, 3, 5, 5];

function migratoryBirds(arr) {
  let map = {};
  let max = 0;
  let maxObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  let values = Object.values(map);
  let keys = Object.keys(map);
  for (let j = 0; j < values.length; j++) {
    if (values[j] === max) {
      maxObj[keys[j]] = values[j];
    }
    if (values[j] > max) {
      max = values[j];
      maxObj = {};
      maxObj[keys[j]] = values[j];
    }
  }
  let newKeys = Object.keys(maxObj);
  let min = newKeys[0];

  if (newKeys.length > 1) {
    for (var i = 0; i < newKeys.length; i++) {
      if (newKeys[i] < min) {
        min = newKeys[i];
      }
    }
  }
  console.log(min);
  return min;
}

migratoryBirds(arr);
