import { useState, useEffect } from 'react'
import { Loading, Header, Card, Player } from '../components'
import SelectProfileContainer from './profiles'
import FooterContainer from './footer'
import { useAuthListener, useSignOut } from '../hooks'
import * as ROUTES from '../constants/routes'

import logo from '../logo.svg'
import { AiOutlineLogout } from 'react-icons/ai'
import { MdOutlinePlayCircleFilled } from 'react-icons/md'

export default function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const [bg, setBg] = useState(2)
	const [searchTerm, setSearchTerm] = useState('')
	const [category, setCategory] = useState('series')
	const [slideRows, setSlideRows] = useState([])

	const { user } = useAuthListener()
	const { setClicked } = useSignOut(false)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [profile.displayName])

	useEffect(() => {
		setSlideRows(slides[category])
	}, [slides, category])

	useEffect(() => {
		setTimeout(() => {
			bg === 2 ? setBg(0) : setBg(bg + 1)
		}, 30000)
	}, [bg])

	return profile.displayName ? (
		<>
			{loading ? (
				<Loading src={user ? user.photoURL : null} />
			) : (
				<Loading.ReleaseBody />
			)}
			<Header className={`bg-fade${bg}`} src={`joker${bg}`}>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} alt='FlixMix' />
						<Header.TextLink
							active={category === 'series' ? 'true' : 'false'}
							onClick={() => setCategory('series')}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === 'films' ? 'true' : 'false'}
							onClick={() => setCategory('films')}
						>
							Films
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} alt='user picture' />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={() => setClicked(true)}>
										<AiOutlineLogout /> Sign Out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>

				<Header.Feature>
					<Header.FeatureTitle>Watch Joker Now</Header.FeatureTitle>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
					<Header.CTA>
						<MdOutlinePlayCircleFilled /> Play
					</Header.CTA>
				</Header.Feature>
			</Header>

			<Card.Group>
				{slideRows.map(slideItem => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map(item => (
								<Card.Item key={item.id} item={item}>
									<Card.Image
										src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>

			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
