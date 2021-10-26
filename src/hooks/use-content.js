import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'

export default function useContent(target) {
	const { firebase } = useContext(FirebaseContext)
	const [content, setContent] = useState([])

	useEffect(() => {
		async function fetchContent() {
			try {
				const db = getFirestore(firebase)
				const allSnapshots = []

				const querySnapshot = await getDocs(collection(db, target))
				querySnapshot.forEach(doc => allSnapshots.push(doc.data()))

				setContent(allSnapshots)
			} catch (error) {
				console.log(error.message)
			}
		}

		fetchContent()
	}, [])

	return { [target]: content }
}
