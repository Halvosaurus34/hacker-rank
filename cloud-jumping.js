function jumpingOnClouds(c) {
  let total = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] == 0) i++;
    total++;
  }
  return total;
}
