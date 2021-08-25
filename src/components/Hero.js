import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Particles from 'react-particles-js'
import particlesConfig from '../config/particle-config'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'


function Hero() {
    return (
        <Container>
            <Header />
            <HeroContainer>
                <h2>JOSH HERMANS</h2>
                <h4>WEB DEVELOPER IN HTML, CSS, JAVASCRIPT</h4>
                <a href="/download/JoshCV.pdf" download="Josh_resume">
                    <CTA>DOWNLOAD MY CV</CTA>
                </a>
                <div>
                    <a href='https://github.com/ThreshMechanics'>
                        <FaGithub className='hero-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/joshua-hermans-71159910a/'>
                        <FaLinkedin className='hero-icon' />
                    </a>
                </div>
                <Wrap>
                    <Particles className='particles' params={particlesConfig} />
                </Wrap>
            </HeroContainer>
            <a id='arrow-hero' href='#portfolio'>
                <FaArrowDown className='hero-arrow-icon' />
            </a>
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

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 50rem;
        justify-content: space-evenly;
    }
`
const HeroContainer = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px) {
        
        h2 {
            font-size: 40px;
        }
        h4 {
            font-size: 25px;
        }
    }
`


const CTA = styled.button`
    border: 2px solid #66FCF1;
    padding: 10px 17.5px;
    background-color: #0b0c10;
    color: white;
    border-radius: 4px;

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const Wrap = styled.div`
    position: absolute;
    height: calc(100vh - 220px);
    width: 100%;
    z-index: -1;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`
