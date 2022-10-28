import React from 'react'
import styled from 'styled-components/macro'
import HeroBG from '../assets/HeroBG.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${HeroBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroContainer = styled(motion.div)`
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeroItems = styled(motion.div)`
    width: 70%;
    display: flex;
    padding: 1.5rem 0rem;
`

const HeroTitle = styled.span`
    font-size: 5.5rem;
    font-weight: bold;
    color: #fff;

    @media only screen and (max-width: 1440px) {
        font-size: 4.5rem;
    }

`

const HeroSubTitle = styled.span`
    font-size: 3rem;
    color: #fff;

    @media only screen and (max-width: 1440px) {
        font-size: 2.3rem;
    }
`

const HeroBtn = styled(Link)`
    color: #fff;
    font-size: 2rem;
    padding: 2rem;
    border: 0.3rem solid #fff;
    border-radius: 0.5rem;

    &:hover{
        cursor: pointer;
        background-color: var(--red);
    }

    @media only screen and (max-width: 1440px) {
        font-size: 1.8rem;
    }
`


const HeroSection = () => {

    // VARIANTS
    const HeroVariant = {
        hidden: {
            y: -100,
            opacity: 0,
        },

        show: {
            opacity: 1,
            y: 0,
            transition: { 
                delayChildren: 1.5,
                staggerChildren: 0.4,
                duration: 0.8,
            }
        }
    }

    const ChildrenVariant = {
        hidden: {
            y: -100,
            opacity: 0,
        },

        show: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.8,
            }
        }
    }

    return (
        <Container id='hero'>
            <HeroContainer
                variants= { HeroVariant }
                initial= 'hidden'
                animate= 'show'
            >
                <HeroItems 
                    variants= { ChildrenVariant }
                >
                    <HeroTitle> Premier Residential and Commercial Roofing </HeroTitle>
                </HeroItems>

                <HeroItems 
                    variants= { ChildrenVariant }
                >
                    <HeroSubTitle> Serving Toms River, Brick, and all of Ocean County </HeroSubTitle>
                </HeroItems>

                <HeroItems 
                    variants= { ChildrenVariant }
                >
                    <HeroBtn activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        FREE Estimate
                    </HeroBtn>
                </HeroItems>
            </HeroContainer>
        </Container>
    )
}

export default HeroSection