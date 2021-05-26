import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaReact, FaGitAlt, FaWordpress }  from 'react-icons/fa'

function Skills() {
    return (
        <Container id='skills'>
            <Title>
                <h2>=SKILLS=</h2>
            </Title>
            <FlexContainer>
                <GridItem>
                    <FaHtml5 className='html-icon skills-icon'/>
                    <span>HTML5</span>
                </GridItem>
                <GridItem>
                    <FaCss3Alt className='css-icon skills-icon'/>
                    <span>CSS3</span>
                </GridItem>
                <GridItem>
                    <FaJs className='js-icon skills-icon'/>
                    <span>JavaScript</span>
                </GridItem>
                <GridItem>
                    <FaReact className='react-icon skills-icon'/>
                    <span>React</span>
                </GridItem>
                <GridItem>
                    <FaSass className='sass-icon skills-icon'/>
                    <span>SASS</span>
                </GridItem>
                <GridItem>
                    <FaBootstrap className='bs-icon skills-icon'/>
                    <span>Bootstrap</span>
                </GridItem>
                <GridItem>
                    <FaGitAlt className='git-icon skills-icon'/>
                    <span>Git</span>
                </GridItem>
                <GridItem>
                    <FaWordpress className='wp-icon skills-icon'/>
                    <span>Wordpress</span>
                </GridItem>
            </FlexContainer>
        </Container>
    )
}

export default Skills

const Container = styled.div`
    
`

const Title = styled.div`
    font-size: 2.5rem;
    padding-top: 5rem;

    h2 {
        color: #66fcf1;
        padding-top: 1rem;
    }
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
`
const GridItem = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    span {
        color: #66fcf1;
        font-size: 25px;
        margin-top: .7rem;
    }
`