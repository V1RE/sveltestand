import type { RequestHandler } from '@sveltejs/kit';

import respond from './_respond';
import supabase from '$lib/db';

const post: RequestHandler = async () => {
	const body = await supabase.auth.signIn({ provider: 'google' });

	return respond(body);
};

export { post };
