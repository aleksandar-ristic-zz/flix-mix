import React from 'react'
import { render } from 'react-dom'
import './index.css'
import 'normalize.css'
import App from './App'
import { GlobalStyles } from './global-styles'

render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById('root')
)
