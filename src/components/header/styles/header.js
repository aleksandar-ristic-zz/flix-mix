import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'}})
		top left / cover no-repeat;
`

export const Container = styled.div`
	height: 64px;
	margin: 0 56px;
	padding: 18px 0;
	display: flex;
	justify-content: space-between;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 1.875rem;
	}
`

export const Frame = styled.div``

export const Button = styled(Link)`
	display: block;
	width: 84px;
	height: fit-content;
	padding: 8px 17px;
	background-color: #e50914;
	border: 0;
	border-radius: 3px;
	text-decoration: none;
	font-size: 0.925rem;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.15s ease;

	&:hover {
		background-color: #f40612;
	}
`

export const Logo = styled.img`
	width: 6.75rem;
	height: 2rem;
	margin-right: 2.5rem;

	@media (min-width: 1449px) {
		height: 2.8125rem;
		width: 10.4375rem;
	}
`
