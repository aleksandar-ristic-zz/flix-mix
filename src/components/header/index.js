import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
	Background,
	Container,
	Feature,
	ButtonLink,
	Logo,
	Text
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<RouterLink to={to}>
			<Logo {...restProps} />
		</RouterLink>
	)
}
