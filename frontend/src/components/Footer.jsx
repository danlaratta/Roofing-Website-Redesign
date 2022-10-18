import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    min-height: 89vh;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    min-height: 89vh;
`

const LeftSection = styled.div`
    flex: 6;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const TextContainer = styled.div`
    
`

const Title = styled.div`
    font-size: 2.2rem;
    font-weight: bold;
`

const Text = styled.div`
    font-size: 1.6rem;
`

const MapContainer = styled.div`
    width: 100%;
    background-color: red;
`

const RightSection = styled.div`
    flex: 6;

`

const Footer = () => {
    return (
        <Container id='contact'>
            <Wrapper>
                <LeftSection>
                    <LeftContainer>
                        <TextContainer>
                            <Title> Phone </Title>
                            <Text> (732) 929-8398 </Text>
                        </TextContainer>
                        
                        <TextContainer>
                            <Title> Email </Title>
                            <Text> Advancedroofing96@gmail.com </Text>
                        </TextContainer>

                        <TextContainer>
                            <Title> Address </Title>
                            <Text> 1237 Bewick St, Toms River, NJ 08753 </Text>
                        </TextContainer>

                        <MapContainer>
                            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.6694870663387!2d-74.13249288398484!3d39.97114169054098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19c7a18d87727%3A0xcb4987e39250011f!2s1237%20Bewick%20St%2C%20Toms%20River%2C%20NJ%2008753!5e0!3m2!1sen!2sus!4v1666113002099!5m2!1sen!2sus' style={{width: '60%', height: '25vh', border:'0'}} loading='lazy' title='map'></iframe>
                        </MapContainer>
                    </LeftContainer>
                </LeftSection>

                <RightSection>

                </RightSection>
            </Wrapper>
        </Container>
    )
}

export default Footer