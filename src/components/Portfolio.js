import React from 'react'
import styled from 'styled-components'

function Portfolio() {
    return (
        <Container>
            <Title>
                <h2>=PORTFOLIO=</h2>
            </Title>
            <Grid>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='' />
                    </ImgContainer>
                </GridItemContainer>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='' />
                    </ImgContainer>
                </GridItemContainer>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='' />
                    </ImgContainer>
                </GridItemContainer>
                <GridItemContainer>
                    <ImgContainer>
                        <img src='' />
                    </ImgContainer>
                </GridItemContainer>
            </Grid>
        </Container>
    )
}

export default Portfolio

const Container = styled.div`
    height: 100vh;
    background-color: #c5c6c7;
`

const Title = styled.div`
    font-size: 2.5rem;

    h2 {
        
    }
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const GridItemContainer = styled.div`
    border: 3px solid blue;
    width: 49%;
`

const ImgContainer = styled.div`

`