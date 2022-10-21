import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'


const Container = styled(motion.div)`
    width: 100%;
`

const CardContainer = styled(Link) `
    width: 100%;
    position: relative;

    &:hover{
        cursor: pointer;
    }
`

const CardImg = styled.img`
    width: 100%;
`

const TextContainer = styled(motion.div)`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--overlay-red);
    position: absolute;
    bottom: 0;
`

const CardText = styled.span`
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
`

const AboutCard = ({image, text, path}) => {

    // VARIANTS
    const BGVariant = {
        rest: {
            height: 75,
        },

        hover: {
            height: 450,
            transition: { 
                duration: 0.5,
            }
        }
    }

    return (
        <Container 
            initial= 'rest'
            animate= 'rest'
            whileHover= 'hover'
        >
            <CardContainer to={path} spy={true} smooth={true} offset={0} duration={500}>
                <TextContainer
                    variants= { BGVariant }
                >
                    <CardText > {text} </CardText>
                </TextContainer>

                <CardImg src={image} />
            </CardContainer>
        </Container>
    )
}

export default AboutCard