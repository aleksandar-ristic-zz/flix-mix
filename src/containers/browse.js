import { useState, useEffect } from 'react'
import { Browse } from '../components'
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
		loading
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
