import React from 'react'
import styled from 'styled-components/macro'
import AboutCard from '../components/AboutCard'
import Img1 from '../assets/about-img1.png'
import Img2 from '../assets/about-img2.png'
import Img3 from '../assets/about-img3.png'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    border-top: 1rem solid var(--red);
`

const AboutItems = styled.div`
    
`

const TextContainer = styled.div`
    
`

const AboutTitle = styled.span`
    
`

const AboutText = styled.p`
    
`

const CardsContainer = styled.div`
    
`

const CardItem = styled.div`
    
`



const AboutSection = () => {

    let cardData = [
        {id: 1, 'image': Img1, 'text': 'Residential Roofing'},
        {id: 2, 'image': Img2, 'text': 'Commercial Roofing'},
        {id: 3, 'image': Img3, 'text': 'Siding Services'},
    ]

    return (
        <Container id='about'>
            <AboutItems>
                <TextContainer>
                    <AboutTitle> Welcome to Advanced Roofing & Siding Inc. </AboutTitle>
                    <AboutText> 
                        We are Toms River, NJ premier roofing company. We specialize is residential and commercial roofing in Toms River, Brick, 
                        and all of Ocean County.  We take pride in workmanship, efficiency, and customer satisfaction. 
                    </AboutText>
                </TextContainer>
            </AboutItems>

            <AboutItems>
                <CardsContainer>
                    { cardData.map((data, key) => (
                        <CardItem key={data.id}>
                            <AboutCard image= {data.image} text={data.text} />
                        </CardItem>
                    ))}
                </CardsContainer>
            </AboutItems>
        </Container>
    )
}

export default AboutSection