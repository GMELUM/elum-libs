const sliceArray = (count: number, array: Array<any>) => {
  if(array.length <= count) { return [array] };
  const segment = Math.ceil(array.length / count);
  return Array.from(Array(segment)).map((_, index) => {
    const min = index * count;
    const max = min + count;
    return array.slice(min, max);
  });
};

export default sliceArray;
