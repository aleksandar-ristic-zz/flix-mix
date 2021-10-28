import { useState, useEffect } from 'react'
import { Browse, Loading, Header } from '../components'
import SelectProfileContainer from './profiles'
import { useAuthListener } from '../hooks'

export default function BrowseContainer({ slides }) {
	const { user } = useAuthListener()
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [profile.displayName])

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src='joker1'>
				<Header.Feature>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
				</Header.Feature>
			</Header>
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
