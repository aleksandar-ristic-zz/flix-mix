import React from 'react'
import { Inner } from './styles/jumbotron'

export default function Jumbotron({ direction = 'row', ...restProps }) {
	return (
		<Inner direction={direction}>
			<p>Hola los todos!</p>
		</Inner>
	)
}
