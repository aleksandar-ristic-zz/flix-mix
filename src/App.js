import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirected, ProtectedRoute } from './helpers/routes'

export default function App() {
	const user = {}

	return (
		<>
			<Router>
				<Switch>
					<ProtectedRoute user={user} path={ROUTES.BROWSE}>
						<Browse />
					</ProtectedRoute>
					<IsUserRedirected
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.HOME}
						exact
					>
						<Home />
					</IsUserRedirected>
					<IsUserRedirected
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_IN}
					>
						<Signin />
					</IsUserRedirected>
					<IsUserRedirected
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_UP}
					>
						<Signup />
					</IsUserRedirected>
				</Switch>
			</Router>
		</>
	)
}
