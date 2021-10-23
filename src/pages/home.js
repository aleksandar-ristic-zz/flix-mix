import React from 'react'
import { OptForm } from '../components'
import {
	HeaderContainer,
	FaqContainer,
	JumbotronContainer,
	FooterContainer
} from '../src/containers'

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<OptForm>
					<OptForm.Input placeholder='Email address' />
					<OptForm.Button>Try it now</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>
						Ready to watch? Enter your email to create or restart your
						membership
					</OptForm.Text>
				</OptForm>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	)
}
