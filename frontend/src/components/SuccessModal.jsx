import React from 'react'
import styled from 'styled-components/macro'
import { BsCheckCircleFill } from 'react-icons/bs'

const Container = styled.div`
    width: 100%;
    min-height: 89vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    bottom: 0;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContainer = styled.div`
    width: 20%;
    min-height: 35vh;
    background-color: #dddddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 1rem;

    @media only screen and (max-width: 768px) {
        width: 80%;
        min-height: 35vh;
        background-color: #dddddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: 1rem;
    }
`

const ModalItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const IconContainer = styled.div`
    color: #30922b;
    font-size: 6rem;
`

const SuccessMsg = styled.div`
    font-size: 2.2rem;
    font-weight: 600;
`

const SuccessModal = () => {
    return (
        <Container>
            <Wrapper>
                <ModalContainer>
                    <ModalItem>
                        <IconContainer> <BsCheckCircleFill /> </IconContainer>
                    </ModalItem>
                    
                    <ModalItem>
                        <SuccessMsg> Form Submitted Successfully! </SuccessMsg>
                    </ModalItem>
                </ModalContainer>
            </Wrapper>
        </Container>
    )
}

export default SuccessModal