const respond = (body) => {
	if (body.errors) {
		return { status: 401, body };
	}

	const json = JSON.stringify(body.user);
	const value = Buffer.from(json).toString('base64');

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
};

export default respond;
