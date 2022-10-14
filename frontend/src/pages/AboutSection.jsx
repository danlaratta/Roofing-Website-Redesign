import React from 'react'
import styled from 'styled-components/macro'
import AboutCard from '../components/AboutCard'
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'

const Container = styled.div`
    min-height: 89vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;

`

const AboutTitle = styled.h1`
    text-align: center;
    font-size: 4rem;
    color: var(--red);
`

const AboutText = styled.p`
    font-size: 2.2rem;
    width: 50%;
    line-height: 3.5rem;
`

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15rem;
    
`

const CardItem = styled.div`
    width: 18%;
`



const AboutSection = () => {

    let cardData = [
        {id: 1, 'image': Img1, 'text': 'Residential Roofing'},
        {id: 2, 'image': Img2, 'text': 'Commercial Roofing'},
        {id: 3, 'image': Img3, 'text': 'Siding Services'},
    ]

    return (
        <Container id='about'>
                <TextContainer>
                    <TitleContainer>
                        <AboutTitle> Welcome to Advanced Roofing & Siding Inc. </AboutTitle>
                    </TitleContainer>

                    <AboutText> 
                        We are Toms River, NJ premier roofing company. We specialize is residential and commercial roofing in Toms River, Brick, 
                        and all of Ocean County.  We take pride in workmanship, efficiency, and customer satisfaction. 
                    </AboutText>
                </TextContainer>

                <CardsContainer>
                    { cardData.map((data, key) => (
                        <CardItem key={data.id}>
                            <AboutCard image= {data.image} text={data.text} />
                        </CardItem>
                    ))}
                </CardsContainer>
        </Container>
    )
}

export default AboutSection