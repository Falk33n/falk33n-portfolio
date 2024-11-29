import { error, type Handle } from '@sveltejs/kit';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';

const limiter = new RetryAfterRateLimiter({
	IP: [10, 'h'], // 10 requests per hour from the same IP
	IPUA: [5, 'm'], // 5 requests per minute from the same IP and user agent
});

export const handle: Handle = async ({ event, resolve }) => {
	const status = await limiter.check(event);
	if (status.limited) {
		throw error(
			429,
			`You are being rate limited. Please try again after ${status.retryAfter} seconds.`,
		);
	}
	return await resolve(event);
};
