import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Particles from 'react-particles-js'
import particlesConfig from '../config/particle-config'


function Hero() {
    return (
        <Container>
            <Header />
            <HeroContainer>
                <h2>JOSH HERMANS</h2>
                <h4>WEB DEVELOPER IN HTML, CSS, JAVASCRIPT, REACT</h4>
                <a href='#'>
                    <CTA>DOWNLOAD MY CV</CTA>
                </a>
                <Wrap>
                    <Particles className='particles' params={particlesConfig} />
                </Wrap>
            </HeroContainer>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    background-color: rgba(0,0,0,0);
    height: 100vh;
    width: 100%;
    overflow: hidden;

    h2 {
        color: #66FCF1;
        font-size: 60px;
        margin-bottom: 1rem;
    }

    h4 {
        margin-top: 0;
        color: white;
        font-size: 25px; 
    }
`
const HeroContainer = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const CTA = styled.button`
    border: 2px solid #66FCF1;
    padding: 10px 17.5px;
    background-color: #0b0c10;
    color: white;
    border-radius: 4px;
`

const Wrap = styled.div`
    position: absolute;
    height: calc(100vh - 220px);
    width: 100%;
    z-index: -1;
`