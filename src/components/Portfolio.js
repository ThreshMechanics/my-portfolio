import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaCloud } from 'react-icons/fa'

function Portfolio() {
    return (
        <Container id='portfolio'>
            <Title>
                <h2>=PORTFOLIO=</h2>
            </Title>
            <Grid>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='/Images/DisneyScreenshot.PNG' />
                        <HiddenContainer>
                            <h3>React, Redux, Firebase</h3>
                        </HiddenContainer>
                    </ImgContainer>
                    <FaGithub className='portfolio-icon icon-git' />
                    <FaCloud className='portfolio-icon icon-cloud' />
                </GridItemContainer>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='/Images/disneycloness.PNG' />
                        <HiddenContainer>
                            <h3>DISNEY+ CLONE</h3>
                            <h3>React, Redux, Firebase</h3>
                        </HiddenContainer>
                    </ImgContainer>
                    <FaGithub className='portfolio-icon icon-git' />
                    <FaCloud className='portfolio-icon icon-cloud' />
                </GridItemContainer>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='/Images/applecloness.PNG' />
                        <HiddenContainer>
                            <h3>APPLE CLONE</h3>
                            <h3>HTML, SASS, JavaScript</h3>
                        </HiddenContainer>
                    </ImgContainer>
                    <FaGithub className='portfolio-icon icon-git' />
                    <FaCloud className='portfolio-icon icon-cloud' />
                </GridItemContainer>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='/Images/uadventuress.PNG' />
                        <HiddenContainer>
                            <h3>TRAVEL AGENCY WEBSITE</h3>
                            <h3>Wordpress, SEO, CSS</h3>
                        </HiddenContainer>
                    </ImgContainer>
                    <FaGithub className='portfolio-icon icon-git' />
                    <FaCloud className='portfolio-icon icon-cloud' />
                </GridItemContainer>
            </Grid>
        </Container>
    )
}

export default Portfolio

const Container = styled.div`
    background-color: #c5c6c7;
`

const Title = styled.div`
    font-size: 2.5rem;
    padding-top: 5rem;

    h2 {
        margin-top: 0rem;
        padding-top: 1rem;
    }
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const GridItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 40%;
`

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`
const HiddenContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: rgb(102,252,241);
    transition: all 250ms;

    &:hover {
        opacity: .7;
    }

    h3 {
        color: #0b0c10;
        font-size: 2rem;
    }
`