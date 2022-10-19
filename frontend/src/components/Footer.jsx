import React from 'react'
import styled from 'styled-components/macro'
import LogoImg from '../assets/logo1.png'
import { Link } from 'react-scroll'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

const Container = styled.div`
    width: 100%;
    background-color: var(--blue);
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

const SectionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const LogoLink = styled(Link)`
    cursor: pointer;
    color: #fff;
    padding-left: 2rem;
`

const Icon = styled.div`
    color: #fff;
    font-size: 2rem;
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
                    <SectionItem>
                        <LogoLink to="hero" spy={true} smooth={true} offset={0} duration={500}>
                            <img src={LogoImg} alt='logo' style={{width: '70%'}} />
                        </LogoLink>
                    </SectionItem>

                    <SectionItem>
                        <Icon> <HiOutlineLocationMarker /> </Icon>
                        <Text> 1237 Bewick St, Toms River, NJ 08753 </Text>
                    </SectionItem>

                    <SectionItem>
                        <Icon> <HiOutlinePhone /> </Icon>
                        <Text> (732) 929-8398 </Text>
                    </SectionItem>

                    <SectionItem>
                        <Icon> <HiOutlineMail /> </Icon>
                        <Text> Advancedroofing96@gmail.com </Text>
                    </SectionItem>
                </Section>

            </Wrapper>
        </Container>
    )
}

export default Footer