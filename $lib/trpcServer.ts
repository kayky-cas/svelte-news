import * as trpc from '@trpc/server';

export const router = trpc.router().query('hello', {
	async resolve() {
		return 'Hello World!';
	}
});

export type Router = typeof router;
