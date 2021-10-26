import React from 'react'
import { useContent } from '../hooks'

export default function Browse() {
	// TODO we need series and films
	const { series } = useContent('series')
	// TODO we need slides

	// TODO pass it to the browse container

	return <h2 style={{ color: 'aliceblue' }}>Browse!</h2>
}
