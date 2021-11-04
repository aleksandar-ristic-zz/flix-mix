import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function useAuthListener() {
	const { firebase } = useContext(FirebaseContext)
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

	const auth = getAuth(firebase)

	useEffect(() => {
		const listener = onAuthStateChanged(auth, authUser => {
			if (authUser) {
				const { email, displayName, photoURL } = authUser

				localStorage.setItem(
					'authUser',
					JSON.stringify({
						email,
						displayName,
						photoURL
					})
				)

				setUser({ email, displayName, photoURL })
			} else {
				localStorage.removeItem('authUser')
				setUser(null)
			}
		})

		return () => listener()
	}, [auth])

	return { user }
}
