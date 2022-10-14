import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 100%;
`

const CardContainer = styled.div`
    width: 40%;
`

const CardImg = styled.img`
    
`

const CardText = styled.span`
    
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