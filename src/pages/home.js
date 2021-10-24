import React from 'react'
import { OptForm, Feature } from '../components'
import {
	HeaderContainer,
	FaqContainer,
	JumbotronContainer,
	FooterContainer
} from '../containers'

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Unlimited films, TV programmes and more.
					</Feature.Title>
					<Feature.Subtitle>
						Watch anywhere. Cancel at anytime.
					</Feature.Subtitle>
				</Feature>
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
