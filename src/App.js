import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'

export default function App() {
	return (
		<>
			<Router>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Route exact path={ROUTES.BROWSE}>
					<Browse />
				</Route>
				<Route exact path={ROUTES.SIGN_IN}>
					<Signin />
				</Route>
				<Route exact path={ROUTES.SIGN_UP}>
					<Signup />
				</Route>
			</Router>
		</>
	)
}
