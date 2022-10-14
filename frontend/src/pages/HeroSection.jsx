import React from 'react'
import styled from 'styled-components/macro'
import HeroBG from '../assets/HeroBG.png'
import { Link } from 'react-scroll'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${HeroBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroContainer = styled.div`
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeroItems = styled.div`
    width: 70%;
    display: flex;
    padding: 1.5rem 0rem;
`

const HeroTitle = styled.span`
    font-size: 5.5rem;
    font-weight: bold;
    color: #fff;

`

const HeroSubTitle = styled.span`
    font-size: 3rem;
    color: #fff;
`

const HeroBtn = styled(Link)`
    color: #fff;
    font-size: 2rem;
    padding: 2rem;
    border: 0.3rem solid #fff;
    border-radius: 0.5rem;

    &:hover{
        cursor: pointer;
        /* background-color: var(--red); */
        background-color: var(--blue);
    }
`

const HeroSection = () => {
    return (
        <Container id='hero'>
            <HeroContainer>
                <HeroItems>
                    <HeroTitle> Premier Residential and Commercial Roofing </HeroTitle>
                </HeroItems>

                <HeroItems>
                    <HeroSubTitle> Serving Toms River, Brick, and all of Ocean County </HeroSubTitle>
                </HeroItems>

                <HeroItems>
                    <HeroBtn activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        FREE Estimate
                    </HeroBtn>
                </HeroItems>
            </HeroContainer>
        </Container>
    )
}

export default HeroSection