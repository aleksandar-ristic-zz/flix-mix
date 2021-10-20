import styled from 'styled-components/macro'

export const Container = styled.div`
	height: 100%;
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`

export const Input = styled.input`
	width: 100%;
	max-width: 450px;
	height: 4.375rem;
	padding: 0.625rem;
	border: 0;
	box-sizing: border-box;
`

export const Button = styled.button`
	height: 4.375rem;
	padding: 0 2rem;
	border: 0;
	background: #e50914;
	text-transform: uppercase;
	color: aliceblue;
	font-size: 1.625rem;
	cursor: pointer;

	&:hover {
		background: #f40612;
	}

	@media (max-width: 1000px) {
		height: 3.125rem;
		margin-top: 1.25rem;
		font-size: 1rem;
		font-weight: bold;
	}

	img {
		width: 1.5rem;
		margin-left: 0.625rem;
		filter: brightness(0) invert(1);

		@media (max-width: 1000px) {
			width: 1rem;
		}
	}
`

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`

export const Text = styled.p`
	text-align: center;
	font-size: 19.2px;
	color: aliceblue;

	@media (max-width: 600px) {
		font-size: 1rem;
		line-height: 1.4;
	}
`
