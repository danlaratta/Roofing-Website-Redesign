import React from 'react'
import styled from 'styled-components/macro'
import LogoImg from '../assets/logo1.png'
import { Link } from 'react-scroll'

const Container = styled.div`
    width: 100%;
    background-color: var(--red);
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0rem;
    width: 100%;
`

const Section = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const LogoLink = styled(Link)`
    cursor: pointer;
    color: #fff;
    padding-left: 2rem;
`

const Text = styled.span`
    color: #fff;
    font-size: 1.6rem;
`

const Footer = () => {
    return (
        <Container id='contact'>
            <Wrapper>
                <Section>
                    <LogoLink to="hero" spy={true} smooth={true} offset={0} duration={500}>
                        <img src={LogoImg} alt='logo' style={{width: '70%'}} />
                    </LogoLink>

                    <Text> 1237 Bewick St, Toms River, NJ 08753 </Text>

                    <Text> (732) 929-8398 </Text>

                    <Text> Advancedroofing96@gmail.com </Text>
                </Section>

            </Wrapper>
        </Container>
    )
}

export default Footer