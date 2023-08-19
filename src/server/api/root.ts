import fibonacci from './routers/fibonacci';
import { router } from './trpc';

export const trpcRouter = router({
  fibonacci,
});

export type TrpcRouter = typeof trpcRouter;
