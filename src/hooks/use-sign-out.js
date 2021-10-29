import { useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase'
import { getAuth, signOut } from 'firebase/auth'

export default function useSignOut() {
	const { firebase } = useContext(FirebaseContext)
	const auth = getAuth(firebase)

	useEffect(() => {
		console.log('Signed Out')
		const handler = signOut(auth)
			.then(() => {
				localStorage.removeItem('authUser')
				return console.log('Success!')
			})
			.catch(error => {
				return console.log(error.message)
			})

		return () => handler
	}, [])
}
