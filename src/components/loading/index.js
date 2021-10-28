import React from 'react'
import { LockBody, ReleaseBody, Picture, Spinner } from './styles/loading'

export default function Loading({ src }) {
	return (
		<Spinner>
			<LockBody />
			<Picture src={`/images/users/${src}.png`} />
		</Spinner>
	)
}
