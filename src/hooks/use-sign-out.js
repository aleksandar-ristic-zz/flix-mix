import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase'
import { getAuth, signOut } from 'firebase/auth'

export default function useSignOut() {
	const [clicked, setClicked] = useState(false)
	const { firebase } = useContext(FirebaseContext)
	const auth = getAuth(firebase)

	useEffect(() => {
		if (clicked) {
			const handler = signOut(auth)
				.then(() => {
					localStorage.removeItem('authUser')
				})
				.catch(error => {
					console.log(error.message)
				})

			return () => handler
		}
	}, [clicked])

	return { setClicked }
}
