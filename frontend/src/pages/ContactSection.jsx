import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import SuccessModal from '../components/SuccessModal'
import { motion } from 'framer-motion'

const Container = styled.div`
    min-height: 89vh;
    width: 100%;
`

const Wrapper = styled.div`
    min-height: 89vh;
    display: flex;
    position: relative;
`

const ContactContainer = styled.div`
    flex: 3;
    display: flex;
    justify-content: flex-end;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    width: 45%;
`

const SectionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const ContactTitle = styled.span`
    color: var(--blue);
    font-size: 3.5rem;
    font-weight: bold;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    color: var(--blue);
    font-size: 2rem;
    font-weight: bold;
`

const Text = styled.span`
    font-size: 1.6rem;
`

const FormContainer = styled.div`
    flex: 9;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 5rem 1.5rem;
`

const FormTitle = styled.span`
    font-size: 3.5rem;
    color: var(--blue);
    font-weight: bold;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 65%;
    -webkit-box-shadow: 0px 0px 15px 3px #959595; 
    box-shadow: 0px 0px 15px 3px #959595;
    background-color: var(--blue);
    padding: 5rem 0rem;
`

const Inputs = styled.input`
    width: 85%;
    outline: none;
    border: none;
    padding: 1.8rem 1rem;
    font-size: 1.6rem;
`

const TextBox = styled.textarea`
    padding: 1.5rem 1rem;
    height: 10vh;
    width: 85%;
    outline: none;
    border: none;
    font-size: 1.6rem;
`

const Btn = styled.button`
    padding: 1.5rem 5rem;
    font-size: 1.6rem;
    background-color: var(--blue);
    border: 0.2rem solid #fff;
    color: #fff;
    font-weight: 600;
    margin-top: 1.5rem;
    
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: var(--blue);
    }
`

const ErrorMsg = styled.span`
    font-size: 1.6rem;
    color: #ff0000;
    font-weight: 600;
`


const ContactSection = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: '',
    })

    const {fname, lname, email, message} = formData

    const [phone, setPhone] = useState('')
    const [errorMsg, setErrorMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [showModal, setShowModal] = useState(false)


    const handleInput = (e) => {
        const {name, value} = e.target

        setFormData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const formatPhoneNumber = (value) => {
        if (!value) return value
      
        const phoneNumber = value.replace(/[^\d]/g, '')
      
        const phoneNumberLength = phoneNumber.length
        if (phoneNumberLength < 4) return phoneNumber
      
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
        }
      
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`
    }

    const handlePhoneInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        setPhone(formattedPhoneNumber)
    }

    const formValidation = (data) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if(!data.fname){
            errors.fname = 'First name is required'
        }
        
        if(!data.lname){
            errors.lname = 'Last name is required'
        }

        if(!data.email){
            errors.email = 'Email is required'
        }
        else if(!regex.test(data.email)){
            errors.email = 'This email is invalid'
        }

        if(!phone){
            errors.phone = 'Phone number is required'
        }
        
        if(!data.message){
            errors.message = 'Message is required'
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            message: message,
        }

        console.log(data)
        
        setErrorMsg(formValidation(formData))
        setIsSubmit(true)
    }

    useEffect(() => {
        if(Object.keys(errorMsg).length === 0 && isSubmit){
            setIsSuccess(true)
        }
        
        if(isSuccess === true){
            setShowModal(true)
        }

        if(isSuccess === true){
            setTimeout(() => {
                setShowModal(false)

                window.scrollTo(0, 0)

                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    message: '',
                })

                setPhone('')
            }, '2000')
        }

    }, [errorMsg, setIsSuccess, isSuccess, isSubmit])

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
                duration: 1,
            }
        }
    }

    const LinkVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'mirror',
            }
        }
    }

    return (
        <Container id='contact'>
            <Wrapper>
                { showModal && <SuccessModal />}

                <ContactContainer>
                    <Section>
                        <SectionItem>
                            <ContactTitle> Contact Info </ContactTitle>
                        </SectionItem>

                        <SectionItem>
                            <TextContainer>
                                <Title> Hours </Title>
                                <Text> Mon-Fri 9am - 5pm </Text>
                            </TextContainer>
                        </SectionItem>

                        <SectionItem>
                            <TextContainer>
                                <Title> Address </Title>
                                <Text> 1237 Bewick St, <br/> Toms River, NJ 08753 </Text>
                            </TextContainer>
                        </SectionItem>

                        <SectionItem>
                            <TextContainer>
                                <Title> Phone </Title>
                                <Text> (732) 929-8398 </Text>
                            </TextContainer>
                        </SectionItem>

                        <SectionItem>
                            <TextContainer>
                                <Title> Email </Title>
                                <Text> Advancedroofing96@gmail.com </Text>
                            </TextContainer>
                        </SectionItem>
                    </Section>

                </ContactContainer>

                <FormContainer>
                    <FormTitle> Contact Us For Free Estimate  </FormTitle>

                    <Form onSubmit={handleSubmit}>
                        <Inputs
                            type=''
                            placeholder= 'First Name'
                            onChange={handleInput}
                            minLength = '3'
                            maxLength = '20'
                            name='fname'
                            value= {fname}
                        />
                        <ErrorMsg> { errorMsg.fname } </ErrorMsg>

                        <Inputs
                            type=''
                            placeholder= 'Last Name'
                            onChange={handleInput}
                            minLength = '3'
                            maxLength = '20'
                            name= 'lname'
                            value= {lname}
                        />
                        <ErrorMsg> { errorMsg.lname } </ErrorMsg>

                        <Inputs
                            type=''
                            placeholder= 'Email'
                            onChange={handleInput}
                            name='email'
                            value= {email}
                        />
                        <ErrorMsg> { errorMsg.email } </ErrorMsg>

                        <Inputs
                            type=''
                            placeholder= 'Phone'
                            onChange={(e) => handlePhoneInput(e)}
                            value= {phone}
                            name='phone'
                        />
                        <ErrorMsg> { errorMsg.phone } </ErrorMsg>

                        <TextBox
                            type=''
                            placeholder= 'Message'
                            onChange={handleInput}
                            minLength = '10'
                            maxLength = '50'
                            name= 'message'
                            value= {message}
                        />
                        <ErrorMsg> { errorMsg.message } </ErrorMsg>

                        <Btn type='submit' > Submit </Btn>

                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactSection