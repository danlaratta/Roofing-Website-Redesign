import React from 'react'
import styled from 'styled-components/macro'
import LogoImg from '../assets/Logo.png'

const Container = styled.div`
    
`

const LeftNav = styled.div`
    
`

const LogoContainer = styled.div`
    
`

const Logo = styled.img`
    
`

const CenterNav = styled.div`
    
`

const RightNav = styled.div`
    
`

const Navbar = () => {
    return (
        <Container>
            <LeftNav>
                <LogoContainer>
                    <Logo src={LogoImg} />
                </LogoContainer>
            </LeftNav>

            <CenterNav>
                
            </CenterNav>

            <RightNav>
                
            </RightNav>
        </Container>
    )
}

export default Navbar