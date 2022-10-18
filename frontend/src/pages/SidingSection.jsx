import React from 'react'
import styled from 'styled-components/macro'
import SidingBG from '../assets/siding.png'

const Container = styled.div`
    min-height: 89vh;
    width: 100%;
    background-image: url(${SidingBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
`

const Wrapper = styled.div`
    display: flex;
`


const LeftSection = styled.div`
    flex: 5;
`

const RightSection = styled.div`
    flex: 7;
    min-height: 89vh;
    display: flex;
    align-items: center;
`
  

const LeftWrapper = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
    height: 86.5%;
`

const TopSection = styled.div`
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

const BottomSection = styled.div`
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



const SidingSection = () => {
    return (
        <Container id='siding'>
            <Wrapper> 
                <LeftSection> 
                    <LeftWrapper>
                        <TopSection>
                            <SectionContainer>

                                <Title> Top Quality Siding </Title>

                                <Text>
                                    Add value to your home or property with new siding. We specialize in siding installation, repair, and maintenance. 
                                    Siding is an affordable way to increase the value of your home and add character. We can match any color or material 
                                    needed to build your siding.
                                </Text>
                            </SectionContainer>
                        </TopSection>

                        <BottomSection>
                            <SectionContainer>
                                <Title> Siding Services </Title>

                                <ListContainer>
                                    <ServiceList>
                                        <ServiceItems> Residential Siding </ServiceItems>
                                        <ServiceItems> Commercial Siding </ServiceItems>
                                    </ServiceList>

                                    <ServiceList>
                                        <ServiceItems> Repair </ServiceItems>
                                        <ServiceItems> Installation </ServiceItems>
                                    </ServiceList>
                                    
                                    <ServiceList>
                                        <ServiceItems> Maintenance </ServiceItems>
                                    </ServiceList>
                                </ListContainer>
                            </SectionContainer>
                        </BottomSection>
                    </LeftWrapper>
                </LeftSection>

                <RightSection> </RightSection>
            </Wrapper>
        </Container>
    )
}

export default SidingSection