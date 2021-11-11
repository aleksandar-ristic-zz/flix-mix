import React, { useRef, useState } from 'react'
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
	Profile,
	Search,
	SearchIcon,
	SearchInput,
	CTA
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

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const [searchActive, setSearchActive] = useState(false)
	const searchRef = useRef()

	function onButtonClick() {
		setSearchActive(searchActive => !searchActive)
		searchRef.current.focus()
	}

	return (
		<Search {...restProps}>
			<SearchIcon onClick={() => onButtonClick()}>
				<img
					src='/images/icons/search.png'
					alt='search icon'
					description='Search'
				/>
			</SearchIcon>
			<SearchInput
				ref={searchRef}
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				active={searchActive}
				placeholder='Search films and series'
				description='Just type name of your favourite film or series'
			/>
		</Search>
	)
}

Header.CTA = function HeaderCTA({ children, ...restProps }) {
	return <CTA {...restProps}>{children}</CTA>
}
