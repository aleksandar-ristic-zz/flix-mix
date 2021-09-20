import styled from 'styled-components/macro'

export const Item = styled.div`
	padding: 3.125rem 5%;
	border-bottom: 0.5rem solid #333;
	color: white;
	overflow: hidden;
	display: flex;
`

export const Inner = styled.div`
	display: flex;
  flex-direction: ${({ direction }) => direction}
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Pane = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 2.825rem;
		text-align: center;
	}
`

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-bottom: 0.5rem;

	@media (max-width: 600px) {
		font-size: 2.25rem;
	}
`

export const SubTitle = styled.h2`
	font-size: 1.625rem;
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 1.125rem;
	}
`

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`

export const Container = styled.div`
	@media (max-width: 1000px) {
		${Item}:last-of-type h2 {
			margin-bottom: 3.25rem;
		}
	}
`
