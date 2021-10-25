import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile
} from 'firebase/auth'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signup() {
	const history = useHistory()
	const { firebase } = useContext(FirebaseContext)
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const isInvalid = name.length < 2 || password.length < 5 || email.length < 10

	function handleSignup(e) {
		e.preventDefault()

		const auth = getAuth(firebase)

		return createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				updateProfile(res.currentUser, {
					displayName: name,
					photoURL: Math.floor(Math.random() * 5) + 1
				}).then(() => {
					history.push(ROUTES.BROWSE)
				})
			})
			.catch(error => {
				setEmail('')
				setPassword('')
				setName('')
				setError(error.message)
			})
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Create Account</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignup} method='POST'>
						<Form.Input
							placeholder='First Name'
							value={name}
							onChange={({ target }) => setName(target.value)}
							type='text'
						/>
						<Form.Input
							placeholder='Email'
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							type='email'
						/>
						<Form.Input
							placeholder='Password'
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							type='password'
							autoComplete='off'
						/>
						<Form.Submit disabled={isInvalid} type='submit'>
							Sign Up
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						Already a user?{' '}
						<Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more. Google it.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}
