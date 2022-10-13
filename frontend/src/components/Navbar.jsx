import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LogoImg from '../assets/Logo.png'
import { Link, animateScroll as scroll } from 'react-scroll'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.bgColor ? "#000" : "rbga(0, 0, 0, 0)"};
    position: fixed;
    z-index: 10;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 2rem 1rem;
`

const LeftNav = styled.div`
    flex: 3;
`

const LogoContainer = styled.div`
    
`

const Logo = styled.img`
    
`

const CenterNav = styled.div`
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavLinks = styled.div`
    display: flex;
    gap: 10rem;
`

const NavLink = styled(Link)`
    cursor: pointer;
    color: #fff;
    font-size: 1.8rem;

    &.active {
        color: red;
    }
`

const RightNav = styled.div`
    flex: 3;
`

const Navbar = () => {
    const [bgColor, setBgColor] = useState(false)

    const changeBgColor = () => {
        window.scrollY >= 100 ? setBgColor(true) : setBgColor(false)
    }
    window.addEventListener('scroll', changeBgColor)

    return (
        <Container bgColor={bgColor}>
            <Wrapper>
            <LeftNav>
                    <LogoContainer>
                        <NavLink activeClass='active' to="hero" spy={true} smooth={true} offset={0} duration={500}>
                            <Logo src={LogoImg} />
                        </NavLink>
                    </LogoContainer>
                </LeftNav>

                <CenterNav>
                    <NavLinks>
                        <NavLink activeClass='active' to="about" spy={true} smooth={true} offset={0} duration={500}>
                            About
                        </NavLink>

                        <NavLink activeClass="active" to="roofing" spy={true} smooth={true} offset={0} duration={500}>
                            Roofing
                        </NavLink>

                        <NavLink activeClass="active" to="siding" spy={true} smooth={true} offset={0} duration={500}>
                            Siding
                        </NavLink>

                        <NavLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                            Contact
                        </NavLink>

                    </NavLinks>
                </CenterNav>

                <RightNav>
                    
                </RightNav>
            </Wrapper>
        </Container>
    )
}

export default Navbar