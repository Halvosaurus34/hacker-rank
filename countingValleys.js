let path = "UDDDUDUU";
let steps = 8;
function countingValleys(steps, path) {
  console.log(path);
  let pathArr = path.split("");
  let seaLevel = 0;
  let valleyCount = 0;
  pathArr.forEach((element) => {
    if (element === "U" && seaLevel === -1) {
      seaLevel++;
      valleyCount++;
    } else if (element === "D" && seaLevel === 0) {
      seaLevel--;
    } else if (element === "U") {
      seaLevel++;
    } else if (element === "D") {
      seaLevel--;
    }
  });
  console.log(valleyCount, pathArr);
  return valleyCount;
}

countingValleys(steps, path);
