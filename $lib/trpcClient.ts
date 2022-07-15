import type { Router } from './trpcServer';
import * as trpc from '@trpc/client';

export default trpc.createTRPCClient<Router>({ url: '/trpc' });
