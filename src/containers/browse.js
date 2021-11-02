import { useState, useEffect } from 'react'
import { Loading, Header } from '../components'
import SelectProfileContainer from './profiles'
import { useAuthListener, useSignOut } from '../hooks'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export default function BrowseContainer({ slides }) {
	const { user } = useAuthListener()
	const { setClicked } = useSignOut(false)
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [profile.displayName])

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src='joker1'>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} alt='FlixMix' />
						<Header.TextLink>Series</Header.TextLink>
						<Header.TextLink>Films</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} alt='user picture' />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={() => setClicked(true)}>
										Sign Out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>

				<Header.Feature>
					<Header.FeatureTitle>Watch Joker Now</Header.FeatureTitle>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
					<Header.CTA>Play</Header.CTA>
				</Header.Feature>
			</Header>
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
