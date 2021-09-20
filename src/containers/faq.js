import React from 'react'
import { Accordion } from '../components'
import faqData from '../fixtures/faqs.json'

export default function FaqContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
		</Accordion>
	)
}
