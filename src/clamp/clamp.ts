const clamp = (value: number, min: number, max: number) =>
  value > min ? (value < max ? value : max) : min;

export default clamp;
