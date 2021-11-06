import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles/player'
import { MdOutlinePlayCircleFilled } from 'react-icons/md'
import { FeatureContext } from '../card'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
	const [showPlayer, setShowPlayer] = useState(false)
	const { itemFeature } = useContext(FeatureContext)

	return (
		<FeatureContext.Provider value={{ itemFeature }}>
			<PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
				<Container {...restProps}>{children}</Container>
			</PlayerContext.Provider>
		</FeatureContext.Provider>
	)
}

Player.Video = function PlayerVideo({ ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext)
	const { itemFeature } = useContext(FeatureContext)

	return showPlayer
		? ReactDOM.createPortal(
				<Overlay onClick={() => setShowPlayer(false)} {...restProps}>
					<Inner>
						<iframe
							title='netlix-player'
							id='netflix-player'
							src={itemFeature.videoURL.replace('watch?v=', 'embed/')}
						/>
					</Inner>
					<Close />
				</Overlay>,
				document.body
		  )
		: null
}

Player.Button = function PlayerButton({ ...restProps }) {
	const { setShowPlayer } = useContext(PlayerContext)

	return (
		<Button
			onClick={() => setShowPlayer(showPlayer => !showPlayer)}
			{...restProps}
		>
			<MdOutlinePlayCircleFilled /> Play
		</Button>
	)
}
