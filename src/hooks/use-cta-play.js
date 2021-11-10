import { useState, useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { FirebaseContext } from '../context/firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export default function useCtaPlay() {
	const [ctaPlay, setCtaPlay] = useState({})
	const { firebase } = useContext(FirebaseContext)

	useEffect(() => {
		async function getJokerInfo() {
			try {
				const jokerId = '449af9ee-d984-4a15-b11f-bcee0810254d'

				const db = getFirestore(firebase)
				const docRef = doc(db, 'films', jokerId)
				const docSnap = await getDoc(docRef)

				if (docSnap.exists()) {
					setCtaPlay(() => [{ title: 'featured', data: [docSnap.data()] }])
				} else {
					console.error('No such document!')
				}
			} catch (error) {
				console.error(error.message)
			}
		}

		getJokerInfo()

		return () => getJokerInfo()
	}, [])

	return { ctaPlay }
}
