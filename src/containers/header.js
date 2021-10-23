import React from 'react'
import { Header } from '../components/accordion/styles/accordion'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export default function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix Logo' />
				<Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
			</Header.Frame>
			{children}
		</Header>
	)
}
