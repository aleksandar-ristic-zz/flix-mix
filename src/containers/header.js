import React from 'react'
import { Header } from '../components/accordion/styles/accordion'

export default function HeaderContainer() {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo />
				<Header.Button />
			</Header.Frame>
		</Header>
	)
}
