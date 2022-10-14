import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 100%;
`

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardImg = styled.img`
    width: 100%;
`

const CardText = styled.span`
    width: 100%;
    /* background-color: var(--red); */
    background-color: var(--blue);
    padding: 2rem 0rem;
    text-align: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
`

const AboutCard = ({image, text}) => {
    return (
        <Container>
            <CardContainer>
                <CardImg src={image} />
                <CardText> {text} </CardText>
            </CardContainer>
        </Container>
    )
}

export default AboutCard