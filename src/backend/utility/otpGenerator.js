export function generateOtp(digit = 6) {
  const min = 10 ** (digit - 1);
  const max = (10 ** digit) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

