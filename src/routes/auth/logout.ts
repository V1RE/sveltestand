import supabase from '$lib/db';

const get = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		return {
			status: 400,
			body: error.message
		};
	}

	return {
		status: 302,
		headers: {
			location: '/',
			'set-cookie': `jwt=; path=/; expires=0;`
		}
	};
};

export { get };
