import type { RequestHandler, Request } from '@sveltejs/kit';

import respond from './_respond';
import supabase from '$lib/db';

const post: RequestHandler = async (request: Request) => {
	const { email, password } = request.body;

	const body = await supabase.auth.signIn({ email, password });

	return respond(body);
};

export { post };
