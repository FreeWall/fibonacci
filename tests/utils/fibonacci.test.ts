import { fibonacciIndexLimit, getFibonacciNumberAt } from '@/utils/fibonacci';

describe('fibonacci', () => {
  it.each([
    { index: 0, result: 0 },
    { index: 1, result: 1 },
    { index: 2, result: 1 },
    { index: 3, result: 2 },
    { index: 4, result: 3 },
    { index: 5, result: 5 },
    { index: 8, result: 21 },
    { index: 13, result: 233 },
    { index: 25, result: 75025 },
    { index: 99, result: 218922995834555169026n },
    {
      index: 256,
      result: 141693817714056513234709965875411919657707794958199867n,
    },
    {
      index: 1000,
      result:
        43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n,
    },
  ])('getFibonacciNumberAt $index', ({ index, result }) => {
    expect(getFibonacciNumberAt(index)).toBe(BigInt(result));
  });

  it('getFibonacciNumberAt limit', () => {
    expect(() => getFibonacciNumberAt(fibonacciIndexLimit + 1)).toThrowError();
  });
});
