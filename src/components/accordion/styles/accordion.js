import styled from 'styled-components/macro'

export const Container = styled.div`
	border-bottom: 8px solid #222;
	display: flex;
`

export const Item = styled.div`
	margin-bottom: 0.625rem;
	color: aliceblue;

	&:first-of-type {
		margin-top: 3em;
	}
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Body = styled.div``

export const Frame = styled.div`
	margin-bottom: 2.5rem;
`

export const Inner = styled.div`
	max-width: 815px;
	margin: auto;
	padding: 70px 45px;
	display: flex;
	flex-direction: column;
`

export const Title = styled.div`
	margin-top: 0;
	margin-bottom: 0.5rem;
	text-align: center;
	font-size: 50px;
	line-height: 1.1;
	color: white;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`
