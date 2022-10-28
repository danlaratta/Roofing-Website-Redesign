import React from 'react'
import styled from 'styled-components/macro'
import AboutCard from '../components/AboutCard'
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import { motion } from 'framer-motion'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;

    @media only screen and (max-width: 1440px) {
        gap: 2rem;
    }
`

const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;

`

const TitleContainer = styled(motion.div)`
    display: flex;
    justify-content: center;

`

const AboutTitle = styled.span`
    text-align: center;
    font-size: 4rem;
    color: var(--red);
    font-weight: bold;
    padding-bottom: 2rem;

    @media only screen and (max-width: 1440px) {
        font-size: 3.5rem;
        padding-bottom: 0.5rem;
    }
`

const AboutText = styled(motion.p)`
    font-size: 2.2rem;
    width: 50%;
    line-height: 3.5rem;

    @media only screen and (max-width: 1440px) {
        font-size: 2rem;
        line-height: 3.5rem;
        width: 60%;
    }
`

const CardsContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15rem;
    
`

const CardItem = styled(motion.div)`
    width: 18%;
`

const AboutSection = () => {
    let cardData = [
        {'image': Img1, 'text': 'Residential Roofing', path: 'roofing'},
        {'image': Img2, 'text': 'Commercial Roofing',  path: 'roofing'},
        {'image': Img3, 'text': 'Siding Services',  path: 'siding'},
    ]

    // VARIANTS
    const TextContainerVariants = {
        hidden: {
            opacity: 0,
            x:-300,
        },

        show: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 1,
                staggerChildren: 0.6,
            }
        }
    }

    const TextChildrenVariants = {
        hidden: {
            opacity: 0,
            x:-300,
        },

        show: {
            x: 0,
            opacity: 1,
            transition: { 
                duration: 1.4,
            }
        },
    }

    const CardsContainerVariants = {
        hidden: {
            opacity: 0,
        },
    
        show: {
            opacity: 1,
            transition: { 
                duration: 0.8,
                delayChildren: 1,
                staggerChildren: 0.4,
            }
        }
    }
    
    const CardsVariants = {
        hidden: {
            x: 300,
            opacity: 0,
        },
    
        show: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8,
            }
        }
    }

    return (
        <Container id='about'>
                <TextContainer
                    variants= { TextContainerVariants }
                    initial= 'hidden'
                    whileInView="show"
                    viewport={{ once: false, amount: .5 }}
                >
                    <TitleContainer>
                        <AboutTitle> Welcome to Advanced Roofing & Siding Inc. </AboutTitle>
                    </TitleContainer>

                    <AboutText
                        variants= { TextChildrenVariants }
                        initial= 'hidden'
                        whileInView="show"
                        viewport={{ once: false, amount: .5 }}
                    > 
                        We are Toms River, NJ premier roofing company. We specialize is residential and commercial roofing in Toms River, Brick, 
                        and all of Ocean County.  We take pride in workmanship, efficiency, and customer satisfaction. 
                    </AboutText>
                </TextContainer>

                <CardsContainer
                    variants={ CardsContainerVariants }
                    initial= 'hidden'
                    whileInView="show"
                    viewport={{ once: false, amount: .5 }}
                >
                    { cardData.map((data) => (
                        <CardItem key={data.image} variants={ CardsVariants }>
                            <AboutCard image= {data.image} text={data.text} path={data.path} />
                        </CardItem>
                    ))}
                </CardsContainer>
        </Container>
    )
}

export default AboutSection