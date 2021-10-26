import React from 'react'
import {} from 'react-router-dom'
import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export default function SelectProfileContainer({ user, setProfile }) {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt='FlixMix' />
				</Header.Frame>
			</Header>

			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User onClick={'!'}>
						<Profiles.Picture src={user.pictureURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	)
}
