import React from 'react'
import styled from 'styled-components/macro'
import RoofingBG from '../assets/roofing1.png'
import { motion } from 'framer-motion'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`


const BgImage = styled(motion.img)`
    width: 54.5%;
    height: 90%;
    position: absolute;
    left: 0;
    bottom: 0;

`

const RedBg = styled(motion.div)`
    height: 50vh;
    width: 55%;
    background-color: var(--red);
    position: absolute;
    right: 0;
    z-index: -5;

    &:after {
        content: " ";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: var(--red);
        transform-origin: bottom left;
        -ms-transform: skew(15deg, 0deg);
        -webkit-transform: skew(15deg, 0deg);
        transform: skew(15deg, 0deg);
    }
`

const RightSection = styled.div`
    flex: 6;
    min-height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
  

const RightWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4.6rem;
    width: 45%;
    padding-right: 2%;

`

const TopSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SectionContainer = styled.div`
    width: 80%;
`

const Title = styled.span`
    font-size: 3.5rem;
    color: #fff;
    font-weight: bold;
`

const Text = styled.p`
    font-size: 1.8rem;
    line-height: 3.5rem;
    color: #fff;
`

const BottomSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0rem 1.5rem;
`

const ServiceList = styled.ul`
    padding: 0;
`

const ServiceItems = styled.li`
    color: #fff;
    font-size: 1.8rem;
    padding: 0.5rem 0rem;
`



const RoofingSection = () => {

    // VARIANTS
    const ImageVariants = {
        hidden: {
            opacity: 0,
            x: -300,
        },

        show: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8,
            }
        }
    }

    const RedVariants = {
        hidden: {
            opacity: 0,
            x:300,
        },

        show: {
            opacity: 1,
            x: 0,
            transition: { 
                delay: 0.5,
                duration: 0.8,
            }
        }
    }

    const TextContainerVariants = {
        hidden: {
            opacity: 0,
            x:300,
        },

        show: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 1,
                delayChildren: 1,
                staggerChildren: 0.4,
            }
        }
    }

    const TextChildrenVariants = {
        hidden: {
            opacity: 0,
            x:300,
        },

        show: {
            x: 0,
            opacity: 1,
            transition: { 
                duration: 1,
            }
        },
    }

    return (
        <Container id='roofing'>
            <Wrapper> 
                <BgImage src={RoofingBG}
                    variants= { ImageVariants }
                    initial= 'hidden'
                    whileInView="show"
                    viewport={{ once: false, amount: .5 }}
                />

                <RedBg 
                    variants= { RedVariants }
                    initial= 'hidden'
                    whileInView="show"
                    viewport={{ once: false, amount: .5 }}>
                </RedBg>

                <RightSection>
                    <RightWrapper
                        variants= { TextContainerVariants }
                        initial= 'hidden'
                        whileInView="show"
                        viewport={{ once: false, amount: .5 }}
                    >
                        <TopSection
                            variants= { TextChildrenVariants }
                        >
                            <SectionContainer>
                                <Title> Roofing Experts </Title>

                                <Text>
                                    Do you need roofing work done on your home or property?  We specialize in all 
                                    things roofing, whether you need roof repairs or simply maintaining your current roof.
                                </Text>
                            </SectionContainer>
                        </TopSection>

                        <BottomSection
                            variants= { TextChildrenVariants }
                        >
                            <SectionContainer>
                                <Title> Roofing Services </Title>

                                <ListContainer>
                                    <ServiceList>
                                        <ServiceItems> Residential Roofing </ServiceItems>
                                        <ServiceItems> Commercial Roofing </ServiceItems>
                                        <ServiceItems> Repair </ServiceItems>
                                        <ServiceItems> Installation </ServiceItems>
                                        <ServiceItems> Maintenance </ServiceItems>
                                    </ServiceList>

                                    <ServiceList>
                                        <ServiceItems> Tiki Huts </ServiceItems>
                                        <ServiceItems> Tiki Roofs </ServiceItems>
                                        <ServiceItems> Leak Repair </ServiceItems>
                                        <ServiceItems> Liquid Applied Roof System </ServiceItems>
                                        <ServiceItems> Metal Roofing </ServiceItems>
                                    </ServiceList>
                                    
                                    <ServiceList>
                                        <ServiceItems> Roof Maintenance </ServiceItems>
                                        <ServiceItems> Tile Roofing </ServiceItems>
                                        <ServiceItems> Waterproofing </ServiceItems>
                                        <ServiceItems> Shingles </ServiceItems>
                                        <ServiceItems> Roof Coatings </ServiceItems>
                                    </ServiceList>
                                </ListContainer>
                            </SectionContainer>
                        </BottomSection>
                    </RightWrapper>
                </RightSection>
            </Wrapper>
        </Container>
    )
}

export default RoofingSection