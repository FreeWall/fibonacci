import { getFibonacciNumberAt } from '@/utils/fibonacci';
import { publicProcedure, router } from '../trpc';

export default router({
  numberAt: publicProcedure
    .input((input) => {
      if (!(typeof input !== 'string') || !/^\d+$/.test(input as string)) {
        throw new Error('Input is not a number');
      }

      return Number(input);
    })
    .query(({ input: index }) => {
      return {
        number: getFibonacciNumberAt(index).toString(),
      };
    }),
});
