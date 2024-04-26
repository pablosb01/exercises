export function UncontrolledLogin() {
	function onLogin(event) {
		event.preventDefault()

		/* const username = event.target.elements.namedItem('username').value
		const password = event.target.elements.namedItem('password').value
		const remember = event.target.elements.namedItem('remember').checked */

        const formData = new FormData(event.target)

        const username = FormData.get('username')
		const password = FormData.get('password')
		const remember = FormData.get('remember')

		console.log({ username, password, remember })
	}

	return (
		<form onSubmit={onLogin}>
			<input data-testid="username" name="username" />
			<input data-testid="password" name="password" />
			<input data-testid="remember" name="remember" type="checkbox" />

			<button>Login</button>
			<button type="reset">Reset</button>
		</form>
	)
}
