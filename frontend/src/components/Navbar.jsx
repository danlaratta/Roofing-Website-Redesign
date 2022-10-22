import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LogoWhite from '../assets/logo1.png'
import LogoRed from '../assets/logo4.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Container = styled.div`
    width: 100%;
    height: 10vh;
    /* background-color: ${props => props.color === 1 ? "#fff" : "rbga(0, 0, 0, 0)"}; */
    background-color: ${props => props.color === 1 ? "rgba(255, 255, 255, 0.5)" : "rbga(0, 0, 0, 0)"};
    position: fixed;
    z-index: 10;
    box-shadow: ${props => props.color === 1 ? "0rem 0.2rem 0.8rem #565656" : "none"};
`

const Wrapper = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 2rem 1rem;
`

const LeftNav = styled(motion.div)`
    flex: 3;
`


const LogoLink = styled(Link)`
    cursor: pointer;
    color: #fff;
    padding-left: 2rem;
`

const CenterNav = styled(motion.div)`
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavLinks = styled(motion.div)`
    display: flex;
    gap: 10rem;
`

const NavItems = styled(motion.div)``

const LinkContainer = styled(motion.div)``

const NavLink = styled(Link)`
    cursor: pointer;
    color: ${props => props.color === 1 ? "#000" : "#fff"};
    font-size: 1.8rem;

    &.active {
        color: var(--red);
        font-weight: 900;
        padding-bottom: 0.5rem;
    }
`

const RightNav = styled.div`
    flex: 3;
`

const Navbar = () => {
    const [color, setColor] = useState(0)

    const changecolor = () => {
        window.scrollY >= 100 ? setColor(1) : setColor(0)
    }
    window.addEventListener('scroll', changecolor)

    // VARIANTS
    const NavVariant = {
        hidden: {
            y: -100,
            opacity: 0,
        },

        show: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.6,
            }
        }
    }

    const NavLinkVariant = {
        hidden: {
            opacity: 0,
        },

        show: {
            opacity: 1,
            transition: { 
                duration: 0.6,
                delayChildren: 0.5,
                staggerChildren: 0.2,
            }
        }
    }

    const LinkVariants = {
        hidden: {
            y: -100,
        },

        show: {
            y: 0,
            transition: { 
                duration: 0.6,
            }
        },
    }

    const HoverVariants = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <Container color={color}>
            <Wrapper
                variants= { NavVariant }
                initial= 'hidden'
                animate= 'show'
            >
                <LeftNav variants= { NavVariant }>
                    <LogoLink to="hero" spy={true} smooth={true} offset={0} duration={500}>
                        <img src={color ? LogoRed : LogoWhite} alt='logo' style={{width: '23%'}} />
                    </LogoLink>
                </LeftNav>

                <CenterNav>
                    <NavLinks
                        variants= { NavLinkVariant }
                        initial= 'hidden'
                        animate= 'show'
                    >
                        <NavItems variants= { LinkVariants }>
                            <LinkContainer variants= { HoverVariants } whileHover="hover">
                                <NavLink activeClass='active' to="about" spy={true} smooth={true} offset={0} duration={500} color={color}>
                                    About
                                </NavLink>
                            </LinkContainer>
                        </NavItems>

                        <NavItems variants= { LinkVariants }>
                            <LinkContainer variants= { HoverVariants } whileHover="hover">
                                <NavLink activeClass="active" to="roofing" spy={true} smooth={true} offset={0} duration={500} color={color}>
                                    Roofing
                                </NavLink>
                            </LinkContainer>
                        </NavItems>

                        <NavItems variants= { LinkVariants }>
                            <LinkContainer variants= { HoverVariants } whileHover="hover">
                                <NavLink activeClass="active" to="siding" spy={true} smooth={true} offset={0} duration={500} color={color}>
                                    Siding
                                </NavLink>
                            </LinkContainer>
                        </NavItems>

                        <NavItems variants= { LinkVariants }>
                            <LinkContainer variants= { HoverVariants } whileHover="hover">
                                <NavLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} color={color}>
                                    Contact
                                </NavLink>
                            </LinkContainer>
                        </NavItems>
                    </NavLinks>
                </CenterNav>

                <RightNav >
                    
                </RightNav>
            </Wrapper>
        </Container>
    )
}

export default Navbar