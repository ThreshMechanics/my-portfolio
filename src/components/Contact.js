import React from 'react'
import styled from 'styled-components';


function Contact() {
    return (
        <Container id='contact'>
            <Title>
                <h2>=LET'S TALK!=</h2>
            </Title>
            <FormContainer>
                <form action="https://formspree.io/f/mwkaoppl" method='POST'>
                    <FormGroup>
                        <label className='form-label' >NAME</label>
                        <input className='form-input' type="text" name="name" required/>
                    </FormGroup>
                    <FormGroup>
                        <label className='form-label' >EMAIL</label>
                        <input className='form-input' type="text" name="name" required/>
                    </FormGroup>
                    <FormGroup>
                        <label className='form-label' >MESSAGE</label>
                        <input className='form-input message-input' type="text" name="name" required/>
                    </FormGroup>
                        <input className='submit-button' type="submit" value="Submit" />
                </form>
            </FormContainer>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    background-color: #0b0c10;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Title = styled.div`
    font-size: 2.5rem;
    padding-top: 5rem;

    h2 {
        color: #66FCF1;
        margin-top: 0rem;
        padding-top: 1rem;
    }
`

const FormContainer = styled.div`
    height: 70%;
    width: 70%;
    border-radius: 20px;
    background-color: #0b0c10;
    display: flex;
    justify-content: center;
    padding: 2rem;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;


        label {
            color: #66fcf1;
        }
    }
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2rem 0px;


    label {
        justify-self: start;
    }
`
