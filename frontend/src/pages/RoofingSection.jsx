import React from 'react'
import styled from 'styled-components/macro'
import RoofingBG from '../assets/roofing.png'
import { motion } from 'framer-motion'

const Container = styled.div`
    min-height: 89vh;
    width: 100%;
    background-image: url(${RoofingBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
`

const Wrapper = styled.div`
    display: flex;
`


const LeftSection = styled.div`
    flex: 7;
`

const RightSection = styled.div`
    flex: 6;
    min-height: 89vh;
    display: flex;
    align-items: center;
`
  

const RightWrapper = styled(motion.div)`
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
    height: 86.5%;
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
                <LeftSection> </LeftSection>

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