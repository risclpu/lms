// Minimal fetch wrapper to attach authorization header when token exists.
export async function api(path, options = {}, token) {
	const headers = options.headers ? { ...options.headers } : {}
	if (token) headers['Authorization'] = `Bearer ${token}`
	headers['Content-Type'] = headers['Content-Type'] || 'application/json'

	const res = await fetch(path, { ...options, headers })
	const text = await res.text()
	let data
	try {
		data = text ? JSON.parse(text) : null
	} catch (e) {
		data = text
	}

	if (!res.ok) {
		const err = new Error(data?.message || 'API Error')
		err.status = res.status
		err.data = data
		throw err
	}
	return data
}
