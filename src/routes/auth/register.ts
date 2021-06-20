import type { RequestHandler, Request } from '@sveltejs/kit';
import type { BaseBody } from '@sveltejs/kit/types/helper';
type ReadOnlyFormData = Exclude<BaseBody, string | Buffer>;

import respond from './_respond';
import supabase from '$lib/db';

const post: RequestHandler = async (request: Request) => {
	if (typeof request.body === 'string' || request.body instanceof Buffer) {
		return { status: 400 };
	}

	const data: ReadOnlyFormData = request.body;
	const email = data.get('email');
	const password = data.get('password');

	const body = await supabase.auth.signUp({ email, password });

	return respond(body);
};

export { post };
