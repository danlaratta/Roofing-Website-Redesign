import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LogoImg from '../assets/Logo.png'
import { Link, animateScroll as scroll } from 'react-scroll'

const Container = styled.div`
    width: 100%;
    /* background-color: ${props => props.bgColor ? "var(--red)" : "rbga(0, 0, 0, 0)"}; */
    background-color: ${props => props.bgColor ? "var(--blue)" : "rbga(0, 0, 0, 0)"};
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


const LogoLink = styled(Link)`
    cursor: pointer;
    color: #fff;
    font-size: 1.8rem;
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

    &:hover{
        color: #fff;
        transform: scale(1.13);
        /* text-stroke: 1px #fff; */
        -webkit-text-stroke: 0.06rem #fff;
        /* border-bottom: 0.2rem solid #fff; */
    }

    &.active {
        color: #fff;
        border-bottom: 0.2rem solid #fff;
        font-weight: bold;
        padding-bottom: 0.5rem;
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
                        <LogoLink to="hero" spy={true} smooth={true} offset={0} duration={500}>
                            <img src={LogoImg} />
                        </LogoLink>
                </LeftNav>

                <CenterNav>
                    <NavLinks>
                        <NavLink activeClass='active' to="about" spy={true} smooth={true} offset={-113} duration={500}>
                            About
                        </NavLink>

                        <NavLink activeClass="active" to="roofing" spy={true} smooth={true} offset={-113} duration={500}>
                            Roofing
                        </NavLink>

                        <NavLink activeClass="active" to="siding" spy={true} smooth={true} offset={-113} duration={500}>
                            Siding
                        </NavLink>

                        <NavLink activeClass="active" to="contact" spy={true} smooth={true} offset={-113} duration={500}>
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