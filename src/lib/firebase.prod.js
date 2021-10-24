import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const firebaseConfig = {
	apiKey: 'AIzaSyBHpWNKKeylk5yQweFelucpHOpy6RfIa5E',
	authDomain: 'flix-n-chill-4f9b2.firebaseapp.com',
	projectId: 'flix-n-chill-4f9b2',
	storageBucket: 'flix-n-chill-4f9b2.appspot.com',
	messagingSenderId: '259715782242',
	appId: '1:259715782242:web:fce253e47e5add686a633b'
}

const firebase = initializeApp(firebaseConfig)
const db = getFirestore(firebase)

//* seeding database, do it only once
seedDatabase(db)

export { firebase }
