import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Background, Container, Button, Logo } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : { children }
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<RouterLink to={to}>
			<Logo {...restProps} />
		</RouterLink>
	)
}
