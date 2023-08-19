import { getFibonacciNumberAt } from '@/utils/fibonacci';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export default router({
  numberAt: publicProcedure.input(z.number()).query(({ input: index }) => {
    return {
      number: getFibonacciNumberAt(index).toString(),
    };
  }),
});
