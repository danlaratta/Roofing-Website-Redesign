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
    flex: 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const LeftContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5rem;
`

const ContactTitle = styled.div`
    font-size: 2.8rem;
    font-weight: bold;
`

const TextContainer = styled.div`
    
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

const Text = styled.div`
    font-size: 1.6rem;
`

const MapContainer = styled.div`
    width: 100%;
`

const RightSection = styled.div`
    flex: 8;
    display: flex;
    align-items: center;
`

const FormContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    padding: 5rem 1.5rem;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 60%;
    padding: 7rem;
    -webkit-box-shadow: 0px 0px 15px 3px #959595; 
    box-shadow: 0px 0px 15px 3px #959595;
    background-color: #dddddd;
`

const Inputs = styled.input`
    outline: none;
    padding: 2rem 1rem;
`

const TextBox = styled.textarea`
    padding: 1.5rem 1rem;
    height: 15vh;
`



const ContactSection = () => {
    return (
        <Container id='contact'>
            <Wrapper>
                <LeftSection>
                    <LeftContainer>
                        <ContactTitle> Contact Info </ContactTitle>

                        <TextContainer>
                            <Title> Hours </Title>
                            <Text> Mon-Sun 9am - 5pm </Text>
                        </TextContainer>

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
                            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.6694870663387!2d-74.13249288398484!3d39.97114169054098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19c7a18d87727%3A0xcb4987e39250011f!2s1237%20Bewick%20St%2C%20Toms%20River%2C%20NJ%2008753!5e0!3m2!1sen!2sus!4v1666113002099!5m2!1sen!2sus' style={{width: '100%', height: '25vh', border:'0'}} loading='lazy' title='map'></iframe>
                        </MapContainer>

                    </LeftContainer>
                </LeftSection>

                <RightSection>
                    <FormContainer>
                        <Form>
                            <Inputs
                                type=''
                                placeholder= 'First Name'
                            />

                            <Inputs
                                type=''
                                placeholder= 'Last Name'
                            />

                            <Inputs
                                type=''
                                placeholder= 'Email'
                            />

                            <Inputs
                                type=''
                                placeholder= 'Phone'
                            />

                            <TextBox
                                type=''
                                placeholder= 'Service Needed'
                            />

                        </Form>
                    </FormContainer>
                </RightSection>
            </Wrapper>
        </Container>
    )
}

export default ContactSection