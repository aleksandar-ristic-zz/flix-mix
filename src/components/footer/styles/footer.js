import styled from 'styled-components/macro'

export const Container = styled.div`
	max-width: 1000px;
	margin: auto;
	padding: 4.375rem 3.5rem;
	display: flex;
	flex-direction: column;

	@media (max-width: 1000px) {
		padding: 4.375rem 1.875rem;
	}
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-aling: left;
`

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
	grid-gap: 0.935rem;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`

export const Link = styled.a`
	margin-bottom: 1.25rem;
	font-size: 0.875rem;
	color: #757575;
	text-decoration: none;
`

export const Title = styled.p`
	margin-bottom: 2.5rem;
	color: #757575;
	margin-bottom: 2.5rem;
`

export const Text = styled.p`
	margin-bottom: 2.5rem;
	font-size: 0.875rem;
	color: #757575;
`

export const Break = styled.p`
	flex-basis: 100;
	height: 0;
`
