import styled from 'styled-components/macro'

export const Container = styled.div`
	padding: 165px 45px;
	text-align: center;
	display: flex;
	flex-direction: column;
`

export const Title = styled.h2`
	max-width: 650px;
	margin: auto;
	font-size: 3.125rem;
	font-weight: 500;
	color: aliceblue;

	@media (max-width: 600px) {
		font-size: 2.25rem;
	}
`

export const Subtitle = styled.h3`
	max-width: 650px;
	margin: auto;
	padding-top: 1.2rem;
	font-size: 1.625rem;
	font-weight: 400;
	color: hsl(208, 10%, 80%);

	@media (max-width: 600px) {
		font-size: 1.125rem;
	}
`
