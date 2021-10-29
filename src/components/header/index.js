import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
	Background,
	Container,
	ButtonLink,
	Link,
	Logo,
	Feature,
	FeatureTitle,
	Dropdown,
	Text,
	Group,
	Picture,
	Profile
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureTitle = function HeaderFeatureTitle({ children, ...restProps }) {
	return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture src={`/images/users/${src}.png`} {...restProps} />
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<RouterLink to={to}>
			<Logo {...restProps} />
		</RouterLink>
	)
}
