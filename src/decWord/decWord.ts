const decWord = (n: number, titles: string[]) => {
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return titles[2]; }
  if (n1 > 1 && n1 < 5) { return titles[1]; }
  if (n1 === 1) { return titles[0]; }
  return titles[2];
}

export default decWord;
