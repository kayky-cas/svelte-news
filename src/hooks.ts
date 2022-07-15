import { router } from '$lib/trpcServer';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await createTRPCHandle({
		url: '/trpc',
		router,
		event,
		resolve
	});

	return response;
};
