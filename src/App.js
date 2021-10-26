import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
	const user = null

	return (
		<>
			<Router>
				<Switch>
					<ProtectedRoute user={user} path={ROUTES.BROWSE}>
						<Browse />
					</ProtectedRoute>
					<IsUserRedirect user={user} loggedInPath={ROUTES.HOME} exact>
						<Home />
					</IsUserRedirect>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_IN}
					>
						<Signin />
					</IsUserRedirect>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_UP}
					>
						<Signup />
					</IsUserRedirect>
				</Switch>
			</Router>
		</>
	)
}
