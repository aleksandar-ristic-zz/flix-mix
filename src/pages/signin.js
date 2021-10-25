import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signin() {
	const history = useHistory()
	const { firebase } = useContext(FirebaseContext)
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const isInvalid = password.length < 5 || email.length < 10

	function handleSignin(e) {
		e.preventDefault()

		const auth = getAuth(firebase)

		return signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				history.push(ROUTES.BROWSE)
			})
			.catch(error => {
				setEmail('')
				setPassword('')
				setError(error.message)
			})
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in and watch!</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignin}>
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
							Sign In
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						New to FlixMix?{' '}
						<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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
