import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID
}

const firebase = initializeApp(firebaseConfig)
// const db = getFirestore(firebase)

//* seeding database, do it only once
//! seedDatabase(db)

export { firebase }
